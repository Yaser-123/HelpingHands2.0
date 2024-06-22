export interface UserInputData {
  name: string;
  email: string;
  role: string;
  password: string;
}

export interface User extends UserInputData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyInputData {
  name: string;
  address: string;
}

export interface Company extends CompanyInputData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface JobInputData {
  title: string;
  description: string;
  companyId: number;
}

export interface Job extends JobInputData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface JobApplicationInputData {
  userId: number;
  jobId: number;
}

export interface JobApplication extends JobApplicationInputData {
  createdAt: Date;
  updatedAt: Date;
}
export interface CourseInputData {
  name: string;
  instituteName: string;
  instituteLocation: string;
}

export interface Course extends CourseInputData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
