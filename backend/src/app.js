import express from "express";
import dotenv from "dotenv";
import { Pool } from "pg";
import { DatabaseSession } from "./database";

dotenv.config();

export const app = express();
const pool = new Pool({
  connectionString: process.env.PGSQL_URL,
});
export const dbSession = new DatabaseSession(pool);

const initTime = new Date();

app.get("/", (_req, res) => {
  res.send({
    onlineSince: initTime,
    uptime: new Date() - initTime,
    node_version: process.version,
  });
});

// user related endpoints

app.get("/users/:user_id", (req, res) => {
  let user_id = req.params.user_id;
});

app.post("/users/new", (req, res) => {});

// job related endpoints

app.get("/jobs/:job_id", (req, res) => {
  let job_id = req.params.job_id;
});

app.post("/jobs/new", (req, res) => {});
