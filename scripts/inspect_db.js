const Database = require('better-sqlite3');
const path = require('path');
const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);

console.log('DB path:', dbPath);
console.log('Table info:');
console.log(JSON.stringify(db.prepare('PRAGMA table_info(spots)').all(), null, 2));
console.log('\nRows:');
console.log(JSON.stringify(db.prepare('SELECT * FROM spots').all(), null, 2));
