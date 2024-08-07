import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

const router = new Router();


router.post('/', TaskController.create);
router.get('/:id', TaskController.getOne);
router.get('/', TaskController.getAll);
router.patch('/', TaskController.editTask);



export default router;