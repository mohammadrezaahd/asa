import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await connectToDb();
    const projectModel = getTable("Project");

    const project = await projectModel.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found", data: null },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project retrieved successfully", data: project },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error retrieving project", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
