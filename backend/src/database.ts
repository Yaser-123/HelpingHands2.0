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
		let userId = generateAlphaNumericString(10);
		let time = new Date();
		await this.pool.query(
			`INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
			[
				userId,
				data.userName,
				data.email,
				data.role,
				data.password,
				time,
				time,
			],
		);
		return {
			userId,
			...data,
			createdAt: time,
			updatedAt: time,
		};
	}

	async getUser(
		id: string,
		orEmail: boolean = false,
	): Promise<User | undefined> {
		let query = orEmail
			? `SELECT * FROM users WHERE userId=$1 OR email=$1`
			: `SELECT * FROM users WHERE userId=$1`;
		let res = await this.pool.query<User>(query, [id]);
		return res.rows.at(0);
	}

	async addCompany(data: CompanyInputData): Promise<Company> {
		let companyId = generateAlphaNumericString(10);
		let now = new Date();
		await this.pool.query(
			`INSERT INTO companies VALUES ($1, $2, $3, $4, $5)`,
			[companyId, data.companyName, data.address, now, now],
		);
		return {
			companyId,
			...data,
			createdAt: now,
			updatedAt: now,
		};
	}

	async getCompany(comapnyId: string): Promise<Company | undefined> {
		let res = await this.pool.query(
			`SELECT * FROM companies WHERE companyId=$1`,
			[comapnyId],
		);
		return res.rows.at(0);
	}

	async addJob(data: JobInputData): Promise<Job> {
		let jobId = generateAlphaNumericString(10);
		let now = new Date();
		await this.pool.query(
			`INSERT INTO jobs VALUES ($1, $2, $3, $4, $5, $6)`,
			[jobId, data.title, data.jobDescription, data.companyId, now, now],
		);
		return {
			jobId,
			...data,
			createdAt: now,
			updatedAt: now,
		};
	}

	async getJob(jobId: string): Promise<Job | undefined> {
		let res = await this.pool.query(`SELECT * FROM jobs WHERE jobId=$1`, [
			jobId,
		]);
		return res.rows.at(0);
	}

	async addJobApp(data: JobApplicationInputData): Promise<JobApplication> {
		let now = new Date();
		await this.pool.query(
			`INSERT INTO job_applications VALUES ($1, $2, $3, $4)`,
			[data.userId, data.jobId, now, now],
		);
		return {
			userId: data.userId,
			jobId: data.jobId,
			createdAt: now,
			updatedAt: now,
		};
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
		let courseId = generateAlphaNumericString(10);
		let now = new Date();
		await this.pool.query(
			`INSERT INTO courses VALUES ($1, $2, $3, $4, $5, $6)`,
			[
				courseId,
				data.courseName,
				data.instituteName,
				data.instituteLocation,
				now,
				now,
			],
		);
		return {
			courseId,
			...data,
			updatedAt: now,
			createdAt: now,
		};
	}

	async getCourse(courseId: string) {
		let res = await this.pool.query(
			`SELECT * FROM courses WHERE courseId=$1`,
			[courseId],
		);
		return res.rows.at(0);
	}
}
