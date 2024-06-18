import { Pool } from "pg";
import fs from "fs/promises";
export class DatabaseSession {
  /**@type {Pool} */
  pool;

  constructor(pool) {
    this.pool = pool;
  }

  async setup() {
    let data = await fs.readFile("schema.sql");
    this.pool.query(data);
  }
}
