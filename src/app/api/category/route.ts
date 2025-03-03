import { NextRequest } from "next/server";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import { Types } from "mongoose";

interface ICategory {
  name: string;
  subs: Types.ObjectId[];
  models: Types.ObjectId[];
}

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const categoriesModel = getTable("Category");

    const { name, subs } = await req.json();

    console.log(name,subs)
    const category = await categoriesModel.create<ICategory>({
      name,
      subs,
      models: [], 
    });

    return Response.json(
      { message: "Category created successfully", data: category },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "Category creation failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDb();
    const categoriesModel = getTable("Category");

    const categories = await categoriesModel.find({});

    return Response.json(
      { message: "Categories fetched successfully", data: categories },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
