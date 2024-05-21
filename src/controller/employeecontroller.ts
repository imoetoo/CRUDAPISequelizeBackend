import { RequestHandler } from "express";
import { Employee, Department } from "../model/Employee";
import { EmployeeList } from "../../EmployeeDB";
import { createEmployee, deleteEmployee, getAllEmployee, getEmployee, putEmployee } from "../service/employeeservice";

export const GetAllEmployeeController: RequestHandler = async (req, res, next) => {
  try {
    const employees = await getAllEmployee();
    res.status(200).json({
      status: "passed",
      message: "successful operation",
      data: employees
    });
  } catch (error) {
    res.status(500).json({
        status: "failed",
        message: "Server error"
    });
  }
  //produces application.json
};

export const getEmployeeController: RequestHandler = async (req,res,next)=>{
    try{
        const {id} = await req.params;
        const employeeSearch = getEmployee(+id);
        if(employeeSearch === undefined){
            res.status(404).json({
                status:"failed",
                message:"Not Found"
            })
        }
        res.status(200).json({
            status:"passed",
            message:"successful operation, customer found",
            data: employeeSearch
        })
    }catch(error){
        res.status(500).json({
            status: "failed",
            message: "Server error"
        })
    }
}

export const CreateEmployeeController: RequestHandler = async (req,res,next) =>{
    try{
        const {id,name,salary,department} = req.body
        //error 400:
        if( typeof name !== 'string' ||typeof salary !== 'number' 
        // || !(department in Department)
        ){
            return res.status(400).json({
                status: "error",
                message: "Bad request"
            })
        }
        await createEmployee(id,name,salary,department);
        res.status(200).json({
            status:"passed",
            message: "successful operation"
        })

    }   
    catch(error){
        res.status(500).json({
            status:"error",
            message: "Server error"
        })
    }
}

export const putEmployeeController: RequestHandler = async (req,res,next)=>{
    try{
        const {id,name,salary,department} = await req.body
        let prevEmployee = EmployeeList.find(employee =>employee.id === id);
        //error 400:
        if(prevEmployee === undefined){
            return res.status(404).json({
                status: "error",
                message: "Not Found"
            })
        }
        else if(typeof id !== 'number' || typeof name !== 'string' ||typeof salary !== 'number' || !(department in Department)){
            return res.status(400).json({
                status: "error",
                message: "Bad request"
            })
        }
        else if(name === prevEmployee.name && salary == prevEmployee.salary && department == prevEmployee.department){
            return res.status(304).json({
                status: "Unchanged",
                message: "No Change"
            })
        }
        putEmployee(id,name,salary,department);
        res.status(200).json({
            status:"passed",
            message: "successful operation"
        })

    }   
    catch(error){
        res.status(500).json({
            status:"error",
            message: "Server error"
        })
    }
}

export const deleteEmployeeController: RequestHandler= async (req,res,next)=>{
    try{
        const {id} = await req.params;
        const employeeSearch = getEmployee(+id);
        if(employeeSearch === undefined){
            res.status(404).json({
                status:"failed",
                message:"Not Found"
            })
        }
        deleteEmployee(+id);
        res.status(200).json({
            status:"passed",
            message: "successful deletion"
        })
    }catch(error){
        res.status(500).json({
            status: "failed",
            message: "Server error"
        })
    }
}