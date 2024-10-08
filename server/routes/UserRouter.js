import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { body } from "express-validator";
import EmailVerifyMiddleware from "../middlewares/EmailVerifyMiddleware.js";


const router = new Router();


router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    // EmailVerifyMiddleware,
    UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.get('/activate/:link', UserController.activate);
router.get('/info', UserController.getUserOne);




export default router;