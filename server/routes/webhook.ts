import { Router, Request, Response, NextFunction } from "express";
import { appendToSheetByHeaders } from "../services/googleSheets";
import { z } from "zod";

const router = Router();

export const schema = z.object({
  nome: z.string().min(1),
  email: z.string().email().optional(),
  telefone: z.string().min(6),
  origem: z.string().optional(),
  campanha: z.string().optional(),
  empresa: z.string().optional(),
  faturamento: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  page: z.string().optional(),
  hp: z.string().optional(),
});

type LeadRequestBody = z.infer<typeof schema>;

const rateMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQ = 30;

function rateLimit(req: Request, res: Response, next: NextFunction) {
  const key = req.ip || "unknown";
  const now = Date.now();
  const entry = rateMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateMap.set(key, { count: 1, resetAt: now + WINDOW_MS });
    next();
    return;
  }
  if (entry.count >= MAX_REQ) {
    res.status(429).json({ error: "Muitas requisições" });
    return;
  }
  entry.count += 1;
  next();
}

router.post("/lead", rateLimit, async (req: Request<{}, {}, LeadRequestBody>, res: Response) => {
    try {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({ error: "Payload inválido" });
            return;
        }
        const body = parsed.data;
        if (body.hp && body.hp.trim().length > 0) {
            res.status(200).json({ success: true });
            return;
        }

        const ip = req.ip || "";
        const userAgent = req.get("user-agent") || "";
        const referer = req.get("referer") || "";

        await appendToSheetByHeaders({
            nome: body.nome,
            telefone: body.telefone,
            email: body.email,
            origem: body.origem,
            campanha: body.campanha,
            empresa: body.empresa,
            faturamento: body.faturamento,
            utmSource: body.utm_source,
            utmMedium: body.utm_medium,
            utmCampaign: body.utm_campaign,
            utmTerm: body.utm_term,
            utmContent: body.utm_content,
            page: body.page,
            ip,
            userAgent,
            referer,
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Erro ao salvar lead:", err);
        res.status(500).json({ error: "Erro interno ao processar lead" });
    }
});

export default router;
