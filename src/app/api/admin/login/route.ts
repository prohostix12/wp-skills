import { NextRequest, NextResponse } from "next/server";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "AdminPass123!";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
