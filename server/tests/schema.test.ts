import { z } from "zod";
import { schema as leadSchema } from "../routes/webhook";

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg);
}

function shouldPass() {
  const ok = leadSchema.safeParse({
    nome: "Fulano",
    telefone: "55999999999",
    email: "fulano@example.com",
    origem: "Landing Page",
    campanha: "Black Friday",
    empresa: "Trace",
    faturamento: "50000",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "bf",
    page: "/lp/produto-x",
  });
  assert(ok.success, "schema should accept valid payload");
}

function shouldFail() {
  const bad = leadSchema.safeParse({
    nome: "",
    telefone: "",
  });
  assert(!bad.success, "schema should reject invalid payload");
}

shouldPass();
shouldFail();
