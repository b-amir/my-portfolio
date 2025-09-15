import { cache } from "react";
import { openDB } from "./db";

export const getProject = cache(async (id: string) => {
  const db = await openDB();
  const item = await db.execute({
    sql: "SELECT * FROM projects WHERE id = ?",
    args: [id],
  });
  return item.rows[0];
});

export const getAllProjectIds = cache(async () => {
  const db = await openDB();
  const items = await db.execute("SELECT id FROM projects");
  return items.rows.map((item: any) => ({ id: item.id }));
});

export const getProjectsSkillTags = cache(async (id: string) => {
  const db = await openDB();
  const items = await db.execute({
    sql: "SELECT tags FROM projects WHERE id = ?",
    args: [id],
  });
  const project: any = items.rows[0];
  const parsedItems = JSON.parse(project?.tags);
  return parsedItems;
});
