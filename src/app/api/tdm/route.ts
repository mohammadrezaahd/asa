import { NextRequest } from "next/server";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import environments from "@/helpers/configurations";
import filePathGenerator from "@/utils/filePathGenerator";

const STORAGE_FOLDER = environments.storage.storage_folder;

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const modelsModel = getTable("Model");

    const formData = await req.formData();

    const title = formData.get("title");
    const file = formData.get("file");
    const position = JSON.parse(formData.get("position") as string);
    const rotation = JSON.parse(formData.get("rotation") as string);
    const scale = parseFloat(formData.get("scale") as string);
    const thumbnail = formData.get("thumbnail");
    const lights = JSON.parse(formData.get("lights") as string);

    const fileName = await filePathGenerator(file, "tdm");
    const thumbnailName = await filePathGenerator(thumbnail, "thumbs");

    const model = await modelsModel.create({
      title,
      file: `${STORAGE_FOLDER}/3dModels/${fileName}`,
      position,
      rotation,
      scale,
      thumbnail: `${STORAGE_FOLDER}/images/${thumbnailName}`,
      lights,
    });
    return Response.json(
      { message: "Model posted successfully", data: model },
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
