import Database from 'better-sqlite3';
import path from 'path';

// connect to database
const dbPath = process.env.DATABASE_PATH ?? path.resolve(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);

// get all spots
export function getAllSpots() {
  return db.prepare('SELECT rowid, * FROM spots').all();
}

// get spot by id or rowid (for details page)
export function getSpotByIdOrRowId(id: string) {
  const n = Number(id);
  const maybeNum = Number.isNaN(n) ? null : n;
  return db
    .prepare('SELECT rowid, * FROM spots WHERE id = ? OR rowid = ?')
    .get(maybeNum, maybeNum);
}

// insert new spot (for form)
export function insertSpot(name: string, location: string, image: string, description?: string, link?: string) {

    // check desc and link columns
  const cols = db.prepare("PRAGMA table_info(spots)").all();
  const hasDescription = cols.some((c: any) => c.name === 'description');
  const hasLink = cols.some((c: any) => c.name === 'link');

  const insertCols: string[] = ['name', 'location', 'image'];
  const params: any[] = [name, location, image];

  if (hasDescription) {
    insertCols.push('description');
    params.push(description ?? null);
  }

  if (hasLink) {
    insertCols.push('link');
    params.push(link ?? null);
  }

  const placeholders = insertCols.map(() => '?').join(', ');
  const sql = `INSERT INTO spots (${insertCols.join(', ')}) VALUES (${placeholders})`;

  return db.prepare(sql).run(...params);
}
