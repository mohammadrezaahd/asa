import { NextRequest, NextResponse } from "next/server";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import environments from "@/helpers/configurations";
import filePathGenerator from "@/utils/filePathGenerator";

const STORAGE_FOLDER = environments.storage.storage_folder;

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const modelsModel = getTable("Model");
    const categoriesModel = getTable("Category");

    const formData = await req.formData();

    const title = formData.get("title");
    const file = formData.get("file");
    const position = JSON.parse(formData.get("position") as string);
    const rotation = JSON.parse(formData.get("rotation") as string);
    const scale = parseFloat(formData.get("scale") as string);
    const thumbnail = formData.get("thumbnail");
    const lights = JSON.parse(formData.get("lights") as string);
    const gallery = formData.getAll("gallery") as File[];
    const categories = JSON.parse(formData.get("categories") as string);

    const fileName = await filePathGenerator(file, "tdm");
    const thumbnailName = await filePathGenerator(thumbnail, "images/thumbs");
    const galleryNames = await Promise.all(
      gallery.map((item) => filePathGenerator(item, "images/gallery"))
    );

    const model = await modelsModel.create({
      title,
      file: `${STORAGE_FOLDER}/tdm/${fileName}`,
      position,
      rotation,
      scale,
      thumbnail: `${STORAGE_FOLDER}/images/thumbs/${thumbnailName}`,
      lights,
      gallery: galleryNames.map(
        (name) => `${STORAGE_FOLDER}/images/gallery/${name}`
      ),
      categories,
    });

    await Promise.all(
      categories.map(async (categoryId: string) => {
        await categoriesModel.findByIdAndUpdate(categoryId, {
          $push: { models: model._id },
        });
      })
    );

    return NextResponse.json(
      { message: "Model posted successfully", data: model },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDb();
    const modelsModel = getTable("Model");

    const models = await modelsModel.find({});

    return NextResponse.json(
      { message: "Models retrieved successfully", data: models },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
