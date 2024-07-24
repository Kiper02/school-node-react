import { Router } from "express";
import UserRouter from './UserRouter.js'
import TaskRouter from './TaskRouter.js'
import TheoryRouter from './TheoryRouter.js'
import TypeRouter from './TypeRouter.js'
import UserInfoRouter from './UserInfoRouter.js'
import AchievementRouter from "./Achievement.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";



const router = new Router();


router.use('/user', UserRouter);
router.use('/achievement', AuthMiddleware,AchievementRouter);
router.use('/task', AuthMiddleware, TaskRouter);
router.use('/theory', AuthMiddleware, TheoryRouter);
router.use('/type', AuthMiddleware, TypeRouter);
router.use('/userInfo', AuthMiddleware, UserInfoRouter);


export default router;