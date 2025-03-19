import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDb();
    const userModel = getTable("User");
    const users = await userModel.find();
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
