import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Program from "@/models/Program";
import { PROGRAMS } from "@/lib/programsData";

// GET: Public list of programs
export async function GET() {
  try {
    await connectDB();
    // Ensure Cloud Computing is deleted if previously seeded
    await Program.deleteOne({ title: "Cloud Computing" });
    let programs = await Program.find().sort({ createdAt: 1 }).lean();

    // Auto-seed if empty
    if (programs.length === 0) {
      console.log("Seeding programs database with default programs...");
      await Program.insertMany(PROGRAMS);
      programs = await Program.find().sort({ createdAt: 1 }).lean();
    }

    return NextResponse.json({ programs }, { status: 200 });
  } catch (err: any) {
    console.error("Failed to fetch programs:", err);
    // If DB connection fails, fallback to static default array
    return NextResponse.json({ programs: PROGRAMS, isFallback: true }, { status: 200 });
  }
}

// POST: Protected create program
export async function POST(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();

    const newProgram = await Program.create({
      category: body.category,
      title: body.title,
      description: body.description,
      university: body.university,
      universityInitial: body.universityInitial,
      rating: Number(body.rating) || 4.8,
      duration: body.duration || "12h",
      image: body.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      students: body.students || "100+",
      learningPoints: Array.isArray(body.learningPoints) ? body.learningPoints : [],
    });

    return NextResponse.json({ program: newProgram }, { status: 201 });
  } catch (err: any) {
    console.error("Failed to create program:", err);
    return NextResponse.json({ error: err.message || "Failed to create program" }, { status: 500 });
  }
}
