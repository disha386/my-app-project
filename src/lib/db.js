import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "database.sqlite");

export const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS homepage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hero_text TEXT,
    video_url TEXT
  );
`);