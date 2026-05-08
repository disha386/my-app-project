import Database from "better-sqlite3";
import path from "path";

// connect to your database file
const db = new Database(path.join(process.cwd(), "database.sqlite"));

// add new column
db.exec(`
  ALTER TABLE homepage ADD COLUMN logo_url TEXT;
`);

console.log("logo_url column added successfully");