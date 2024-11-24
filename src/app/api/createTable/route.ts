import { NextRequest } from "next/server";
import connectToDb from "@/server/database/connection";

export async function POST(req: NextRequest) {
  try {
    connectToDb();
    const formData = await req.formData();
    const title = formData.get("title");
    const path = formData.get("path");

    // const model = await
  } catch (err) {
    console.log(err);
  }
}
