import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GS_CLIENT_EMAIL,
        private_key: process.env.GS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.GS_SHEET_ID!;

interface LeadData {
    name: string;
    whatsapp: string;
    instagram?: string;
    revenue?: string;
}

export async function appendToSheet(data: LeadData): Promise<void> {
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Leads!A:E",
        valueInputOption: "RAW",
        requestBody: {
            values: [[
                timestamp,
                data.name,
                data.whatsapp,
                data.instagram || "",
                data.revenue || ""
            ]],
        },
    });
}
