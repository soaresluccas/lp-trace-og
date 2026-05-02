import { useState, useEffect } from "react";
import { fetchLeads, LeadData } from "@/services/api";

export function useLeads(limit: number = 10, offset: number = 0) {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadLeads = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchLeads(limit, offset);
        setLeads(response.data);
        setTotal(response.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch leads");
        console.error("Error fetching leads:", err);
      } finally {
        setLoading(false);
      }
    };

    loadLeads();
  }, [limit, offset]);

  return { leads, loading, error, total };
}
