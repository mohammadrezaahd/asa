import { NextRequest } from "next/server";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import filePathGenerator from "@/helpers/filePathGenerator";
import environments from "@/helpers/configurations";

const STORAGE_FOLDER = environments.storage.storage_folder;
const BASE_URL = environments.uri.base_url;

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const modelsModel = getTable("Model");

    const formData = await req.formData();

    const title = formData.get("title");
    const file = formData.get("file");

    const fileName = await filePathGenerator(file);

    const model = await modelsModel.create({
      title,
      file: `${BASE_URL}/${STORAGE_FOLDER}/3dModels/${fileName}`,
    });
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
