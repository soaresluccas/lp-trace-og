import { findHeaderIndex } from "../services/googleSheets";

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg);
}

const headers = [
  "Data",
  "Lead",
  "Email",
  "Contato",
  "@ da empresa",
  "Média de faturamento mensal",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "page",
  "ip",
  "user_agent",
  "referer",
];

function run() {
  assert(findHeaderIndex(headers, ["Data", "Created At"]) === 0, "Data should be index 0");
  assert(findHeaderIndex(headers, ["Lead", "Nome"]) === 1, "Lead should be index 1");
  assert(findHeaderIndex(headers, ["Email", "E-mail"]) === 2, "Email should be index 2");
  assert(findHeaderIndex(headers, ["Contato", "Telefone", "Celular"]) === 3, "Contato should be index 3");
  assert(findHeaderIndex(headers, ["@ da empresa", "Empresa"]) === 4, "Empresa should be index 4");
  assert(findHeaderIndex(headers, ["Média de faturamento mensal", "Faturamento"]) === 5, "Faturamento should be index 5");
  assert(findHeaderIndex(headers, ["utm_source"]) === 6, "utm_source should be index 6");
  assert(findHeaderIndex(headers, ["utm_medium"]) === 7, "utm_medium should be index 7");
  assert(findHeaderIndex(headers, ["utm_campaign"]) === 8, "utm_campaign should be index 8");
  assert(findHeaderIndex(headers, ["page"]) === 9, "page should be index 9");
  assert(findHeaderIndex(headers, ["ip"]) === 10, "ip should be index 10");
  assert(findHeaderIndex(headers, ["user_agent"]) === 11, "user_agent should be index 11");
  assert(findHeaderIndex(headers, ["referer"]) === 12, "referer should be index 12");
}

run();
