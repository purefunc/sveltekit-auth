// drizzle.config.ts
import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();
const { DB_URL } = process.env;
if (!DB_URL) {
	throw new Error('No url');
}
export default {
	schema: './src/lib/server/database/drizzle-schemas.ts',
	out: './src/lib/server/database/migrations',
	dialect: 'sqlite',
	dbCredentials: {
		url: process.env.DB_URL as string
	}
} satisfies Config;
