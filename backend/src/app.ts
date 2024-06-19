import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { Pool } from "pg";
import { DatabaseSession } from "./database";
import { User, UserInputData } from "./interfaces";

dotenv.config();

export const app = express();
const pool = new Pool({
	connectionString: process.env.PGSQL_URL,
	ssl: true,
});
export const dbSession = new DatabaseSession(pool);

const initTime = new Date();

app.use(express.json());

app.get("/", (_req, res) => {
	res.send({
		onlineSince: initTime,
		node_version: process.version,
	});
});

app.get("/users/:user_id", async (req, res: Response<User>) => {
	let data = await dbSession.getUser(req.params.user_id);
	return data ? res.send(data) : res.status(404).send();
});

app.post(
	"/users/new",
	async (req: Request<{}, {}, UserInputData>, res: Response<User>) => {
		let user = await dbSession.addUser(req.body);
		return res.send(user);
	},
);

