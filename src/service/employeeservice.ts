import {Employee, Department} from '../model/Employee';
import {EmployeeList} from '../../EmployeeDB';
import User from '../../models/user'

// const {sequelize, User} =require('../../models');
// import {User} from '../../models/user';

export const getAllEmployee = async (): Promise<any[]> =>{
    return await User.findAll();
}

export const getEmployee = async (id:number) : Promise<any|undefined> =>{
    return await User.findByPk(id); //this is a nested function
}

export const createEmployee = async (id:number, name: string, salary:number , department : Department):Promise<void> => {
    const newEmployee = await User.create({id,name,salary,department});
    console.log(newEmployee)
}

export const putEmployee = (id:number, name:string, salary:number,department:Department):void =>{
    let editEmployee = EmployeeList.find(employee =>employee.id === id);
    if (editEmployee){
        editEmployee.department = department;
        editEmployee.name = name;
        editEmployee.salary=salary;
    }    
}

export const deleteEmployee = (id:number):void =>{
    let delEmployeeIndex = EmployeeList.findIndex(employee =>employee.id === id);
    if(delEmployeeIndex >= 0){
        EmployeeList.splice(delEmployeeIndex,1);
    }
}