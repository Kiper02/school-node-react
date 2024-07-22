import { Router } from "express";
import TheoryController from "../controllers/TheoryController.js";

const router = new Router();


router.post('/', TheoryController.create);
router.get('/:id', TheoryController.getOne);
router.get('/', TheoryController.getAll);


export default router;