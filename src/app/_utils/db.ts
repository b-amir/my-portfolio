import { createClient } from "@libsql/client";

export async function openDB() {
  if (process.env.DB_PROVIDER === "turso") {
    return createClient({
      url: process.env.TURSO_DATABASE_URL as string,
      authToken: process.env.TURSO_AUTH_TOKEN as string,
    });
  }

  return createClient({
    url: "file:sqlite.db",
  });
}
