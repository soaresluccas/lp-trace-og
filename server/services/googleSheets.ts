import { google } from "googleapis";

function getEnv(nameA: string, nameB?: string): string | undefined {
  const a = process.env[nameA];
  if (a && a.length > 0) return a;
  if (nameB) {
    const b = process.env[nameB];
    if (b && b.length > 0) return b;
  }
  return undefined;
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: getEnv("GS_CLIENT_EMAIL", "GOOGLE_CLIENT_EMAIL"),
    private_key: getEnv("GS_PRIVATE_KEY", "GOOGLE_PRIVATE_KEY")?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID =
  getEnv("GS_SHEET_ID", "SHEET_ID") ||
  "";

const DEFAULT_TAB = "Leads";

type LeadAppendPayload = {
  nome: string;
  telefone: string;
  email?: string;
  origem?: string;
  campanha?: string;
  empresa?: string;
  faturamento?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  page?: string;
  ip?: string;
  userAgent?: string;
  referer?: string;
  createdAt?: string;
};

type HeaderCacheEntry = {
  headers: string[];
  fetchedAt: number;
};

const headerCache: Map<string, HeaderCacheEntry> = new Map();
const HEADER_CACHE_TTL_MS = 10 * 60 * 1000;

function normalizeHeader(h: string): string {
  return h.trim();
}

export function findHeaderIndex(headers: string[], candidates: string[]): number {
  const normalized = headers.map(normalizeHeader);
  for (const c of candidates) {
    const idx = normalized.findIndex((h) => h.toLowerCase() === c.toLowerCase());
    if (idx >= 0) return idx;
  }
  return -1;
}

async function getHeaders(tab: string): Promise<string[]> {
  const cache = headerCache.get(tab);
  const now = Date.now();
  if (cache && now - cache.fetchedAt < HEADER_CACHE_TTL_MS) {
    return cache.headers;
  }

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${tab}!1:1`,
  });
  const row = (res.data.values && res.data.values[0]) || [];
  const headers = row.map((v) => String(v));
  headerCache.set(tab, { headers, fetchedAt: now });
  return headers;
}

export async function appendToSheetByHeaders(
  data: LeadAppendPayload,
  tab: string = DEFAULT_TAB
): Promise<void> {
  const headers = await getHeaders(tab);
  const row = new Array(headers.length).fill("");
  const createdAt = data.createdAt || new Date().toISOString();

  const idxData = findHeaderIndex(headers, ["Data", "Created At", "created_at"]);
  const idxLead = findHeaderIndex(headers, ["Lead", "Nome", "name"]);
  const idxEmail = findHeaderIndex(headers, ["Email", "E-mail"]);
  const idxContato = findHeaderIndex(headers, ["Contato", "Telefone", "Celular", "WhatsApp", "Whatsapp", "whatsapp"]);
  const idxOrigem = findHeaderIndex(headers, ["Origem", "Source"]);
  const idxCampanha = findHeaderIndex(headers, ["Campanha", "Campaign"]);
  const idxEmpresa = findHeaderIndex(headers, ["@ da empresa", "Empresa"]);
  const idxFaturamento = findHeaderIndex(headers, ["Média de faturamento mensal", "Faturamento", "Revenue"]);
  const idxUtmSource = findHeaderIndex(headers, ["utm_source"]);
  const idxUtmMedium = findHeaderIndex(headers, ["utm_medium"]);
  const idxUtmCampaign = findHeaderIndex(headers, ["utm_campaign"]);
  const idxUtmTerm = findHeaderIndex(headers, ["utm_term"]);
  const idxUtmContent = findHeaderIndex(headers, ["utm_content"]);
  const idxPage = findHeaderIndex(headers, ["page", "Page"]);
  const idxIp = findHeaderIndex(headers, ["ip", "IP"]);
  const idxUA = findHeaderIndex(headers, ["user_agent", "User Agent"]);
  const idxReferer = findHeaderIndex(headers, ["referer", "Referer"]);

  if (idxData >= 0) row[idxData] = createdAt;
  if (idxLead >= 0) row[idxLead] = data.nome;
  if (idxEmail >= 0) row[idxEmail] = data.email || "";
  if (idxContato >= 0) row[idxContato] = data.telefone;
  if (idxOrigem >= 0) row[idxOrigem] = data.origem || "";
  if (idxCampanha >= 0) row[idxCampanha] = data.campanha || "";
  if (idxEmpresa >= 0) row[idxEmpresa] = data.empresa || "";
  if (idxFaturamento >= 0) row[idxFaturamento] = data.faturamento || "";
  if (idxUtmSource >= 0) row[idxUtmSource] = data.utmSource || "";
  if (idxUtmMedium >= 0) row[idxUtmMedium] = data.utmMedium || "";
  if (idxUtmCampaign >= 0) row[idxUtmCampaign] = data.utmCampaign || "";
  if (idxUtmTerm >= 0) row[idxUtmTerm] = data.utmTerm || "";
  if (idxUtmContent >= 0) row[idxUtmContent] = data.utmContent || "";
  if (idxPage >= 0) row[idxPage] = data.page || "";
  if (idxIp >= 0) row[idxIp] = data.ip || "";
  if (idxUA >= 0) row[idxUA] = data.userAgent || "";
  if (idxReferer >= 0) row[idxReferer] = data.referer || "";

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: tab,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}
