import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";

// GET: Public list of testimonials
export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (err: any) {
    console.error("Failed to fetch testimonials:", err);
    return NextResponse.json({ testimonials: [] }, { status: 200 });
  }
}

// POST: Protected create testimonial
export async function POST(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();

    const testimonial = await Testimonial.create({
      name: body.name,
      designation: body.designation || "",
      text: body.text,
      mediaType: body.mediaType || "photo",
      mediaUrl: body.mediaUrl,
    });

    return NextResponse.json({ testimonial }, { status: 201 });
  } catch (err: any) {
    console.error("Failed to create testimonial:", err);
    return NextResponse.json({ error: err.message || "Failed to create testimonial" }, { status: 500 });
  }
}
