import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';

const betterSqlite = new Database('./src/lib/server/database/sqlite.db');
export const db = drizzle(betterSqlite);

migrate(db, { migrationsFolder: './src/lib/server/database/migrations' });

betterSqlite.close();
