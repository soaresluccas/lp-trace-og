## Visão Geral
- Integrar o webhook existente ao Google Sheets para registrar leads na planilha indicada (ID extraído da URL).
- Padronizar variáveis de ambiente e autenticação com service account.
- Validar payload com Zod, aplicar rate limit e honeypot.
- Escrever na aba por cabeçalho (mapeando colunas automaticamente), preservando o "contrato" da planilha.
- Injetar métricas automáticas (UTMs, IP, user agent, referer, página) no momento do append.

## Estado Atual do Projeto
- Já existe um cliente do Sheets e webhook:
  - Serviço: [googleSheets.ts](file:///c:/programacao/lp-new-trace/lp-trace-og/server/services/googleSheets.ts)
  - Rota: [webhook.ts](file:///c:/programacao/lp-new-trace/lp-trace-og/server/routes/webhook.ts)
  - Registro de rotas: [routes.ts](file:///c:/programacao/lp-new-trace/lp-trace-og/server/routes.ts)
- Dependência googleapis está instalada em package.json.
- Hoje grava em "Leads!A:E" com campos: timestamp, name, whatsapp, instagram, revenue — vamos alinhar com o contrato solicitado.

## Variáveis de Ambiente
- Criar .env e usar nomes já adotados no projeto:
  - GS_SHEET_ID=1Gl6BFD9P2bGUM9fnGXls_KgF-MRFuDEVStaTQlpn_wQ
  - GS_CLIENT_EMAIL=webhook-sheets@trace-company.iam.gserviceaccount.com
  - GS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
- Opcional: aceitar também GOOGLE_CLIENT_EMAIL/GOOGLE_PRIVATE_KEY/SHEET_ID por compatibilidade (fallback).
- Não versionar .env; usar variáveis no ambiente de deploy.

## Cliente Google Sheets
- Manter google.auth.GoogleAuth com scope "https://www.googleapis.com/auth/spreadsheets".
- Centralizar criação do cliente e leitura das envs (com fallback entre GS_* e GOOGLE_*).

## Validação e Proteção
- Zod para validar payload: nome, email opcional, telefone obrigatório para "contato", empresa opcional, faturamento opcional, origem/campanha opcionais.
- Rate limit por IP na rota /api/webhook/lead (ex.: 30 req/5min).
- Honeypot: aceitar um campo oculto (ex.: hp) e descartar se preenchido.

## Mapeamento por Cabeçalho (Contrato da Planilha)
- Ler a primeira linha da aba alvo (ex.: "Leads") para obter cabeçalhos.
- Construir um dicionário header->índice.
- Montar o array de valores alinhado por nome da coluna existente:
  - "Data" → new Date().toISOString()
  - "Lead" → nome
  - "Contato" → telefone
  - "@ da empresa" ou "Empresa" → empresa
  - "Média de faturamento mensal" ou "Faturamento" → faturamento
  - Extras de métricas: "Origem", "Campanha", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "page", "ip", "user_agent", "referer" (somente se os cabeçalhos existirem).
- Se algum cabeçalho não existir, o valor é ignorado (robustez sem redefinir colunas).
- Cache em memória do mapa de cabeçalhos por 10 minutos para evitar leitura a cada append.

## Webhook createLead
- Atualizar o controller para:
  - Validar com Zod.
  - Checar honeypot.
  - Extrair métricas do req (headers, query, body) e normalizar UTMs.
  - Chamar o serviço de append com objeto tipado.
- Responder 200 OK e só então o frontend dispara o pixel.

## Métricas Automáticas
- Capturar e enviar:
  - created_at (ISO)
  - origem, campanha (do body)
  - utm_source, utm_medium, utm_campaign, utm_term, utm_content (query/body)
  - page (path enviado pelo front), referer (req.get("referer")), ip (req.ip), user_agent (req.get("user-agent")).
- Planilha continua como interface de saída; caso no futuro mude CRM/DB/WhatsApp, só o backend muda.

## Frontend (React + Vite)
- Enviar para /api/webhook/lead com JSON: { nome, email, telefone, origem, campanha, empresa, faturamento, utm_* , page }.
- Disparar pixel após o 200 OK.

## Testes e Verificação
- Unit test do mapeamento de cabeçalhos (mock da API do Sheets) e do controller (Zod + honeypot + rate limit).
- Log estruturado já existe; manter sem vazar dados sensíveis.

## Segurança
- Nunca logar private_key.
- Usar replace(/\\n/g, "\n") na private_key.
- Service account com escopo mínimo.

## Entregáveis
- Ajuste do serviço do Sheets com fallback de env e mapeamento por cabeçalhos com cache.
- Atualização do webhook para novos campos e métricas.
- .env de exemplo (não versionado).
- Testes unitários básicos para serviço e rota.

Confirma que seguimos com esse plano e aplicamos as mudanças?