export interface UserInputData {
	userName: string;
	email: string;
	role: string;
	password: string;
}

export interface User extends UserInputData {
	userId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface CompanyInputData {
	companyName: string;
	address: string;
}

export interface Company extends CompanyInputData {
	companyId: string;
	createdAt: Date;
	updatedAt: Date;
}
export interface JobInputData {
	title: string;
	jobDescription: string;
	companyId: string;
}

export interface Job extends JobInputData {
	jobId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface JobApplicationInputData {
	userId: string;
	jobId: string;
}

export interface JobApplication extends JobApplicationInputData {
	createdAt: Date;
	updatedAt: Date;
}
export interface CourseInputData {
	courseName: string;
	instituteName: string;
	instituteLocation: string;
}

export interface Course extends CourseInputData {
	courseId: string;
	createdAt: Date;
	updatedAt: Date;
}
