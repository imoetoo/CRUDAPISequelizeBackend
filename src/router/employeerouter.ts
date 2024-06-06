import {Router} from 'express';
import { GetAllEmployeeController, putEmployeeController,getEmployeeController,deleteEmployeeController,CreateEmployeeController, paginatedGetAllEmployeeController } from '../controller/employeecontroller';
import validateEmployee from '../middleware/validator.ts';
const router = Router();

// router.get("/employees", GetAllEmployeeController);
router.get("/employees", paginatedGetAllEmployeeController);
router.get("/employees/:id", getEmployeeController);
router.post("/employees", validateEmployee ,CreateEmployeeController);
router.put("/employees/:id", putEmployeeController);
router.delete("/employees/:id",deleteEmployeeController);

export default router;