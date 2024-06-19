import fs from "node:fs/promises";
import { Pool } from "pg";
import {
	User,
	UserInputData,
	Job,
	JobInputData,
	Company,
	CompanyInputData,
	JobApplication,
	JobApplicationInputData,
	Course,
	CourseInputData,
} from "./interfaces";
import { generateAlphaNumericString } from "./utils";

export class DatabaseSession {
	pool: Pool;

	constructor(pool: Pool) {
		this.pool = pool;
	}

	async setup() {
		let data = await fs.readFile("schema.sql");
		this.pool.query(data.toString());
	}

	async addUser(data: UserInputData): Promise<User> {
		// TODO: implement sha256 hashing to save passwords.
		let time = new Date();
		let res = await this.pool.query(
			`INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5, $6) RETURNING *;`,
			[data.name, data.email, data.role, data.password, time, time],
		);
		return res.rows[0];
	}

	async getUser(
		id: string,
		orEmail: boolean = false,
	): Promise<User | undefined> {
		let query = orEmail
			? `SELECT * FROM users WHERE id=$1 OR email=$1`
			: `SELECT * FROM users WHERE id=$1`;
		let res = await this.pool.query<User>(query, [id]);
		return res.rows.at(0);
	}

	async addCompany(data: CompanyInputData): Promise<Company> {
		let now = new Date();
		let res = await this.pool.query(
			`INSERT INTO companies VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *;`,
			[data.name, data.address, now, now],
		);
		return res.rows[0];
	}

	async getCompany(comapnyId: string): Promise<Company | undefined> {
		let res = await this.pool.query(`SELECT * FROM companies WHERE id=1`, [
			comapnyId,
		]);
		return res.rows.at(0);
	}

	async addJob(data: JobInputData): Promise<Job> {
		let now = new Date();
		let res = await this.pool.query(
			`INSERT INTO jobs VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *;`,
			[data.title, data.description, data.companyId, now, now],
		);
		return res.rows[0];
	}

	async getJob(jobId: string): Promise<Job | undefined> {
		let res = await this.pool.query(`SELECT * FROM jobs WHERE id=$1`, [
			jobId,
		]);
		return res.rows.at(0);
	}

	async addJobApp(data: JobApplicationInputData): Promise<JobApplication> {
		let now = new Date();
		let res = await this.pool.query(
			`INSERT INTO job_applications VALUES ($1, $2, $3, $4) RETURNING *`,
			[data.userId, data.jobId, now, now],
		);
		return res.rows[0];
	}

	async getJobApps(jobId: string): Promise<{ applicants: JobApplication[] }> {
		let res = await this.pool.query(
			`SELECT * FROM job_applications WHERE jobId=$1`,
			[jobId],
		);
		return {
			applicants: res.rows,
		};
	}

	async addCourse(data: CourseInputData): Promise<Course> {
		let now = new Date();
		let res = await this.pool.query(
			`INSERT INTO courses VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *`,
			[data.name, data.instituteName, data.instituteLocation, now, now],
		);
		return res.rows[0];
	}

	async getCourse(courseId: string) {
		let res = await this.pool.query(
			`SELECT * FROM courses WHERE courseId=$1`,
			[courseId],
		);
		return res.rows.at(0);
	}
}
