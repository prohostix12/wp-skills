import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";

// PUT: Update a testimonial
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = req.cookies.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await connectDB();
    const body = await req.json();

    const updated = await Testimonial.findByIdAndUpdate(
      id,
      {
        name: body.name,
        designation: body.designation || "",
        text: body.text,
        mediaType: body.mediaType || "photo",
        mediaUrl: body.mediaUrl,
      },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json({ testimonial: updated }, { status: 200 });
  } catch (err: any) {
    console.error("Failed to update testimonial:", err);
    return NextResponse.json({ error: err.message || "Failed to update testimonial" }, { status: 500 });
  }
}

// DELETE: Remove a testimonial
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = req.cookies.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await connectDB();
    const deleted = await Testimonial.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("Failed to delete testimonial:", err);
    return NextResponse.json({ error: err.message || "Failed to delete testimonial" }, { status: 500 });
  }
}
