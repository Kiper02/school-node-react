import { Router } from "express";
import UserInfoController from "../controllers/UserInfoController";

const router = new Router();


router.create('/', UserInfoController.create);
router.get('/:id', UserInfoController.get);



export default router;