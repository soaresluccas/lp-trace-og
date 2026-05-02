const API_BASE_URL = "https://trace-apiv1.vercel.app";

export interface LeadData {
  name: string;
  whatsapp: string;
  instagram?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface LeadsListResponse {
  data: LeadData[];
  total: number;
}

/**
 * Fetch leads from the API
 */
export async function fetchLeads(limit: number = 10, offset: number = 0): Promise<LeadsListResponse> {
  const response = await fetch(`${API_BASE_URL}/api/leads?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch leads: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Submit a new lead to the API
 */
export async function submitLead(leadData: LeadData): Promise<{ success: boolean; id?: string }> {
  const response = await fetch(`${API_BASE_URL}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit lead: ${response.statusText}`);
  }

  return response.json();
}
