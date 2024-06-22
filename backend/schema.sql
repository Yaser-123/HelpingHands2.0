CREATE TABLE "users"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "password" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "companies"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "companies" ADD PRIMARY KEY("id");
CREATE TABLE "job_applications"(
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
CREATE TABLE "jobs"(
    "id" SERIAL NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "jobs" ADD PRIMARY KEY("id");
CREATE TABLE "courses"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "instituteName" VARCHAR(255) NOT NULL,
    "instituteLocation" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "courses" ADD PRIMARY KEY("id");
ALTER TABLE
    "jobs" ADD CONSTRAINT "jobs_companyid_foreign" FOREIGN KEY("companyId") REFERENCES "companies"("id");
ALTER TABLE
    "job_applications" ADD CONSTRAINT "job_applications_jobid_foreign" FOREIGN KEY("jobId") REFERENCES "jobs"("id");
ALTER TABLE
    "job_applications" ADD CONSTRAINT "job_applications_userid_foreign" FOREIGN KEY("userId") REFERENCES "users"("id");
