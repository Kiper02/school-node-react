import { Router } from "express";
import UserRouter from './UserRouter.js'
import TaskRouter from './TaskRouter.js'
import TheoryRouter from './TheoryRouter.js'
import TypeRouter from './TypeRouter.js'
import UserInfoRouter from './UserInfoRouter.js'
import AchievementRouter from "./Achievement.js";



const router = new Router();


router.use('/user', UserRouter);
router.use('/achievement', AchievementRouter);
router.use('/task', TaskRouter);
router.use('/theory', TheoryRouter);
router.use('/type', TypeRouter);
router.use('/userInfo', UserInfoRouter);


export default router;