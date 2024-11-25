import { NextRequest } from "next/server";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const modelsModel = getTable("Model");

    const formData = await req.formData();

    const title = formData.get("title");
    const file = formData.get("file");

    const buffer = Buffer.from(await (file as Blob).arrayBuffer());
    const fileName = Date.now() + (file as File).name;
    const filePath = path.join(process.cwd(), `public/uploads/${fileName}`);

    await writeFile(filePath, buffer);

    const model = await modelsModel.create({
      title,
      file: `http://localhost:3000/uploads/${fileName}`,
    });
    // const { title, path } = await req.json();
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
