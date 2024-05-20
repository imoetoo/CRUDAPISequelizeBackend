import {Employee, Department} from '../model/Employee';
import {EmployeeList} from '../../EmployeeDB';


export const getAllEmployee = (): Employee[] =>{
    return EmployeeList;
}

export const getEmployee = (id:number) : Employee|undefined =>{
    return EmployeeList.find(employee => employee.id === id); //this is a nested function
}

export const createEmployee = (id:number, name: string, salary:number , department : Department):void => {
    const newEmployee = new Employee(id,name,salary,department);
    EmployeeList.push(newEmployee);
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