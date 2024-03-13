import { db } from "@/config/db";

export async function GET(req: Request) {
  const data = db().getData();
  return Response.json({ data });
}
