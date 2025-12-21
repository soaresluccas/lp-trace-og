import { Router, Request, Response } from "express";
import { appendToSheet } from "../services/googleSheets";

const router = Router();

interface LeadRequestBody {
    name: string;
    whatsapp: string;
    instagram?: string;
    revenue?: string;
}

router.post("/lead", async (req: Request<{}, {}, LeadRequestBody>, res: Response) => {
    try {
        const { name, whatsapp, instagram, revenue } = req.body;

        if (!name || !whatsapp) {
            res.status(400).json({ error: "Dados inválidos: nome e whatsapp são obrigatórios" });
            return;
        }

        await appendToSheet({ name, whatsapp, instagram, revenue });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Erro ao salvar lead:", err);
        res.status(500).json({ error: "Erro interno ao processar lead" });
    }
});

export default router;
