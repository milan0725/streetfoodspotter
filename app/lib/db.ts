import Database from 'better-sqlite3';
import path from 'path';

// Path to the SQLite database file
const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);

export function getAllSpots() {
  // Adjust the table and column names as needed
  return db.prepare('SELECT * FROM spots').all();
}

export function insertSpot(name: string, location: string, image: string) {
  return db.prepare('INSERT INTO spots (name, location, image) VALUES (?, ?, ?)')
    .run(name, location, image);
}
