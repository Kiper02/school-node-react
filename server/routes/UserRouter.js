import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router();


router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.get('/activate/:link', UserController.activate);




export default router;