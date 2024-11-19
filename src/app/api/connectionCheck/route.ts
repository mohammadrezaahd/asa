// src/app/api/connectionCheck/route.ts
import { NextResponse } from "next/server";
import { getDatabaseConnection } from "@/server/database/connection";

export async function GET() {
  try {
    const pool = await getDatabaseConnection();
    return NextResponse.json(
      { message: "Connected to database" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Error connecting to database", details: err },
      { status: 500 }
    );
  }
}
