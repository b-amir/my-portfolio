import { openDB } from "@/_utils/db";

export async function GET(req: Request, res: Response) {
  const db = await openDB();

  const skillTags = await db.execute("SELECT * FROM skillTags");

  return new Response(JSON.stringify(skillTags.rows), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
