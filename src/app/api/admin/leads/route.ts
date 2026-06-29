import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Lead from "@/models/Lead";
import { getLeadsFallback } from "@/lib/leads_fallback";

export async function GET(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ leads }, { status: 200 });
  } catch (err) {
    console.warn("MongoDB connection failed, falling back to local file:", err);
    const leads = getLeadsFallback();
    return NextResponse.json({ leads, isFallback: true }, { status: 200 });
  }
}
