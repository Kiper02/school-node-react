import { Router } from "express";
import UserInfoController from "../controllers/UserInfoController.js";

const router = new Router();


// router.post('/', UserInfoController.create);
router.get('/:id', UserInfoController.getOne);



export default router;