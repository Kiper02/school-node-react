import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

const router = new Router();


router.create('/', TaskController.create);
router.get('/:id', TaskController.getOne);
router.get('/', TaskController.getAll);



export default router;