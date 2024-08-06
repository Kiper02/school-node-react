import { validationResult } from "express-validator"
import ApiError from "../exceptions/ApiError.js";
import UserService from "../services/UserService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.badRequest('Ошибка при валидации', errors.array()));
            }
            const {email, password} = req.body;
            const userData = await UserService.registration(email, password);

            res.cookie('refreshToken', userData.refreshToken, {maxeAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await UserService.login(email, password);
            
            res.cookie('refreshToken', userData.refreshToken, {maxeAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await UserService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (error) {
            next(error)
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await UserService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            next(error)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            if(!refreshToken) {
                console.log('asd');
            }
            const userData = await UserService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxeAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController();