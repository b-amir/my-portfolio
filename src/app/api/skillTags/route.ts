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

  const skillTags = await db.all("SELECT * FROM skillTags");

  return new Response(JSON.stringify(skillTags), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });


}

