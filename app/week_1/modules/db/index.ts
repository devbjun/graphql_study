import { Pool } from 'pg';
import config from './config'

const pool = new Pool(config);
const db = {
  query: (sql: string, params?: any) => pool.query(sql, params)
}

export default db;