import { User } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";
import {generateFromEmail} from "unique-username-generator";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import MailService from "./MailService.js";
import UserDto from "../dtos/UserDto.js";
import TokenService from "./TokenService.js";



class UserService {
    async registration(password, email) {
        const candidate = await User.findOne({where: {email}});
        if(candidate) {
            throw ApiError.badRequest('Такой пользователь уже существует')
        }
        const activationLink = uuidv4();
        const hashPassword = bcrypt.hash(password, 3);
        const username = generateFromEmail(email, 3);
        const user = await User.create({email, password: hashPassword, name: username, activationLink});
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: UserDto};
    }

    async login(email, password) {
        const user = await User.findOne({where: {email}});
        if(!user) {
            throw ApiError.badRequest('Пользователь с таким email не существует')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiError.badRequest('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});
        
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: UserDto};
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken);
        return token;
    }

    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink}});
        if(!user) {
            throw ApiError.badRequest('Неккоректная ссылка активации');
        }

        user.isActivated = true;
        await user.save();
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
    }
}

export default new UserService();