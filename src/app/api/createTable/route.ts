import { NextRequest } from "next/server";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const modelsModel = getTable("Model");

    const { title, path } = await req.json();
    console.log("modelsModel ====>>>", modelsModel);
    const model = await modelsModel.create({ title, path });
    console.log("MODEL", model);
    return Response.json(
      { message: "data base connected successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "data base connected failed" },
      { status: 500 }
    );
  }
}
