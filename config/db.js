import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

// Debug opcional:
console.log('Tipo da senha:', typeof env.POSTGRES_PASSWORD);
console.log('Senha recebida:', env.POSTGRES_PASSWORD);

const db = new Pool({
  host: env.POSTGRES_HOST,
  port: parseInt(env.POSTGRES_PORT, 10) || 5432,         
  user: env.POSTGRES_USER,
  password: String(env.POSTGRES_PASSWORD),                 
  database: env.POSTGRES_DB,
});

export default db;
