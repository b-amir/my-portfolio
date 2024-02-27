import { open } from 'sqlite';
import sqlite3 from 'sqlite3';


export async function openDB() {
  return await open({
    filename: './sqlite.db',
    driver: sqlite3.Database,
  });
}

export async function closeDB(db: sqlite3.Database) {
  return await db.close();
}