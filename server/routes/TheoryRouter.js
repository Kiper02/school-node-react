import { Router } from "express";
import TheoryController from "../controllers/TheoryController";
import TaskController from "../controllers/TaskController";

const router = new Router();


router.create('/', TheoryController.create);
router.get('/:id', TaskController.getOne);
router.get('/', TaskController.getAll);


export default router;