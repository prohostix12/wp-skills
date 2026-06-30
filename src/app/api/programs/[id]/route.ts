import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Program from "@/models/Program";

// PUT: Protected update program
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

    const updatedProgram = await Program.findByIdAndUpdate(
      id,
      {
        category: body.category,
        title: body.title,
        description: body.description,
        university: body.university,
        universityInitial: body.universityInitial,
        rating: Number(body.rating),
        duration: body.duration,
        image: body.image,
        students: body.students,
        learningPoints: Array.isArray(body.learningPoints) ? body.learningPoints : [],
      },
      { new: true }
    );

    if (!updatedProgram) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    return NextResponse.json({ program: updatedProgram }, { status: 200 });
  } catch (err: any) {
    console.error("Failed to update program:", err);
    return NextResponse.json({ error: err.message || "Failed to update program" }, { status: 500 });
  }
}

// DELETE: Protected delete program
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
    const deletedProgram = await Program.findByIdAndDelete(id);

    if (!deletedProgram) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Program deleted successfully" }, { status: 200 });
  } catch (err: any) {
    console.error("Failed to delete program:", err);
    return NextResponse.json({ error: err.message || "Failed to delete program" }, { status: 500 });
  }
}
