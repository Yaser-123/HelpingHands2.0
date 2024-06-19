import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { Pool } from "pg";
import { DatabaseSession } from "./database";
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

app.get("/jobs/:job_id", async (req, res: Response<Job>) => {
  let data = await dbSession.getJob(req.params.job_id);
  return data ? res.send(data) : res.status(404).send();
});

app.post(
  "/jobs/new",
  async (req: Request<{}, {}, JobInputData>, res: Response<Job>) => {
    let job = await dbSession.addJob(req.body);
    return res.send(job);
  },
);

app.get("/companies/:company_id", async (req, res: Response<Company>) => {
  let company = await dbSession.getCompany(req.params.company_id);
  return company ? res.send(company) : res.status(404).send();
});

app.post(
  "/companies/new",
  async (req: Request<{}, {}, CompanyInputData>, res: Response<Company>) => {
    let company = await dbSession.addCompany(req.body);
    return res.send(company);
  },
);
app.get(
  "/job_applications/:app_id",
  async (req, res: Response<{ applicants: JobApplication[] }>) => {
    return res.send(await dbSession.getJobApps(req.params.app_id));
  },
);

app.post(
  "/job_applications/new",
  async (
    req: Request<{}, {}, JobApplicationInputData>,
    res: Response<JobApplication>,
  ) => {
    let job_app = await dbSession.addJobApp(req.body);
    return res.send(job_app);
  },
);

app.get("/courses/:course_id", async (req, res: Response<Course>) => {
  let course = await dbSession.getCourse(req.params.course_id);
  return course ? res.send(course) : res.status(404).send();
});

app.post(
  "/courses/new",
  async (req: Request<{}, {}, CourseInputData>, res: Response<Course>) => {
    let course = await dbSession.addCourse(req.body);
    return res.send(course);
  },
);
