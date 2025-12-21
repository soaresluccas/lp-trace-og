import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import webhookRoutes from "./routes/webhook";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use("/api/webhook", webhookRoutes);

  return httpServer;
}
