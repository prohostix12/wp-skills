import { NextRequest, NextResponse } from "next/server";
import { getContent } from "@/lib/getContent";
import { CONTENT_DEFAULTS } from "@/lib/contentDefaults";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  const { section } = await params;
  const fallback = CONTENT_DEFAULTS[section];

  if (fallback === undefined) {
    return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  }

  const data = await getContent(section, fallback);
  return NextResponse.json({ data }, { status: 200 });
}
