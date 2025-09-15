import { openDB } from "@/_utils/db";

export async function GET() {
  const db = await openDB();

  const projects = await db.execute("SELECT * FROM projects");

  return new Response(JSON.stringify(projects.rows), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
