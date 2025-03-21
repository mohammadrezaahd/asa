import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const detailed = req.nextUrl.searchParams.get("detailed") === "true";

    await connectToDb();
    const modelsModel = getTable("Model");

    const projection = detailed ? "-__v" : "_id title thumbnail gallery";

    const model = await modelsModel.findById(id, projection);

    if (!model) {
      return NextResponse.json(
        { message: "Model not found", data: [] },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Model retrieved successfully", data: model },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error retrieving model", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
