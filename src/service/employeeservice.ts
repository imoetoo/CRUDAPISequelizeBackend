// import {Department} from '../model/Employee';
import User from '../../models/user';

// const {sequelize, User} =require('../../models');
// import {User} from '../../models/user';

export const getAllEmployee = async (): Promise<User[]> =>{
    return await User.findAll();
}

export const getEmployee = async (id:number) : Promise<User|null> =>{
    return await User.findByPk(id);
}

export const createEmployee = async (name: string, salary:number , department:string):Promise<void> => {
    const newEmployee = await User.create({name,salary,department});
}

export const putEmployee = async (id:number, name:string, salary:number,department:string):Promise<void> =>{
    let editEmployee = await User.findByPk(id);
    if (editEmployee){
        editEmployee.set({
            department : department,
            name : name,
            salary: salary,
        });
        editEmployee.save();
    }    
}

export const deleteEmployee = async (id:number):Promise<void> =>{
    let delEmployee = await User.findByPk(id);
    if(delEmployee){
        await delEmployee.destroy();
    }
}

export const paginatedGetAllEmployee = async (limit: number , offset:number):Promise<{count:number, rows: User[]}> =>{
    return await User.findAndCountAll({
        limit,
        offset,
    });
}