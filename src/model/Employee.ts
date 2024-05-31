const Joi = require('joi');

export const EmployeeSchema = Joi.object({
    id: Joi.number().optional(),
    name: Joi.string().required(),
    salary: Joi.number().required(),
    department: Joi.string().valid("HR","PS").required(),
});

// export enum Department{HR = 'HR', PS = 'PS'}

// export class Employee {
//   constructor(
//     public id: number,
//     public name: string,
//     public salary: number,
//     public department: Department
//   ) {}
// }

