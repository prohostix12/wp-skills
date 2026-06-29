import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "src/lib/leads_fallback.json");

export interface FallbackLead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export function getLeadsFallback(): FallbackLead[] {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read fallback leads:", err);
    return [];
  }
}

export function saveLeadFallback(lead: Omit<FallbackLead, "_id" | "createdAt">): FallbackLead {
  try {
    const leads = getLeadsFallback();
    const newLead: FallbackLead = {
      ...lead,
      _id: "fallback_" + Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
    };
    leads.unshift(newLead);
    fs.writeFileSync(FILE_PATH, JSON.stringify(leads, null, 2), "utf-8");
    return newLead;
  } catch (err) {
    console.error("Failed to save fallback lead:", err);
    throw err;
  }
}
