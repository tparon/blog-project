import mysql from "mysql2";
import { Pool } from "mysql2/promise";

export type DbPool = Pool;

let db: DbPool;

const initDb = () => {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return pool.promise();
};

export const getDb = () => {
  if (!db) {
    db = initDb();
  }
  return db;
};
