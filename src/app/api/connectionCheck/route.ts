import connectToDb from "@/server/database/connection";

export async function GET() {
  try {
    await connectToDb();
    return Response.json(
      { message: "data base connected successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: "Connection to database failed" },
      { status: 500 }
    );
  }
}
