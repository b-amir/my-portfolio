import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// @ts-ignore
let db = null;

export async function GET(req: Request, res: Response) {
  // @ts-ignore
  if (!db) {
    db = await open({
      filename: "./sqlite.db",
      driver: sqlite3.Database,
    });
  }

  const projects = await db.all("SELECT * FROM projects");

  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });


}

