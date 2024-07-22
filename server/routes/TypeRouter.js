import { Router } from "express";
import TypeController from "../controllers/TypeController.js";

const router = new Router();


router.post('/', TypeController.create);
router.get('/:id', TypeController.getOne);
router.get('/', TypeController.getAll);



export default router;