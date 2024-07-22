import { Router } from "express";
import AchievementController from "../controllers/AchievementController.js";

const router = new Router();


router.post('/', AchievementController.create);
router.get('/:id', AchievementController.getOne);
router.get('/', AchievementController.getAll);



export default router;