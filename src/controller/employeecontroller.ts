import { RequestHandler } from "express";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployee,
  putEmployee,
} from "../service/employeeservice";

export const GetAllEmployeeController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const employees = await getAllEmployee();
    res.status(200).json({
      status: "passed",
      message: "successful operation",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Server error",
    });
  }
};

export const getEmployeeController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    let employeeSearch = await getEmployee(+id);
    if (employeeSearch === null) {
      res.status(404).json({
        status: "failed",
        message: "Not Found",
      });
    }
    res.status(200).json({
      status: "passed",
      message: "successful operation, customer found",
      data: employeeSearch,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Server error",
    });
  }
};

export const CreateEmployeeController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id, name, salary, department } = req.body;
    //error 400:
    // if (
    //   typeof name !== "string" ||
    //   typeof salary !== "number" ||
    //   !(department in Department)
    // ) {
    //   return res.status(400).json({
    //     status: "error",
    //     message: "Bad request",
    //   });
    // }
    await createEmployee(id, name, salary, department);
    res.status(200).json({
      status: "passed",
      message: "successful operation",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};

export const putEmployeeController: RequestHandler = async (req, res, next) => {
  try {
    const { id, name, salary, department } = req.body;
    let prevEmployee = await getEmployee(+id);
    //error 400:
    if (prevEmployee === null) {
      return res.status(404).json({
        status: "error",
        message: "Not Found",
      });
    } else if (
      prevEmployee &&
      name === prevEmployee.name &&
      salary === prevEmployee.salary &&
      department === prevEmployee.department
    ) {
      //setting this setting to 304 will NOT give any return values in POSTMAN, but is the right logic.
      return res.status(404).json({
        status: "Unchanged",
        message: "No changes made",
      });
    }
    putEmployee(id, name, salary, department);
    res.status(200).json({
      status: "passed",
      message: "successful operation",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};

export const deleteEmployeeController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const employeeSearch = await getEmployee(+id);
    if (employeeSearch === null) {
      res.status(404).json({
        status: "failed",
        message: "Not Found",
      });
    }
    deleteEmployee(+id);
    res.status(200).json({
      status: "passed",
      message: "successful deletion",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Server error",
    });
  }
};
