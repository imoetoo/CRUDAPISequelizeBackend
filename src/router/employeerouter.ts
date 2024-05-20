import {Router} from 'express';
import { GetAllEmployeeController, putEmployeeController,getEmployeeController,deleteEmployeeController,CreateEmployeeController } from '../controller/employeecontroller';

const router = Router();

router.get("/employees", GetAllEmployeeController);
router.get("/employees/:id", getEmployeeController);
router.post("/employees", CreateEmployeeController);
router.put("/employees", putEmployeeController)
router.delete("/employees/:id",deleteEmployeeController);

export default router;