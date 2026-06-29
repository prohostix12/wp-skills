import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Lead from "@/models/Lead";
import { saveLeadFallback } from "@/lib/leads_fallback";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
    }

    try {
      await connectDB();
      await Lead.create({ name, email, phone, message });
    } catch (dbErr) {
      console.warn("MongoDB save failed, falling back to local file:", dbErr);
      saveLeadFallback({ name, email, phone, message });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
