import { User, Token } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";
import {generateFromEmail} from "unique-username-generator";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import MailService from "./MailService.js";
import UserDto from "../dtos/UserDto.js";
import TokenService from "./TokenService.js";
import UserInfoService from "./UserInfoService.js";



class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({where: {email}});
        if(candidate) {
            throw ApiError.badRequest('Такой пользователь уже существует')
        }
        const activationLink = uuidv4();
        const hashPassword = await bcrypt.hash(password, 3);
        const username = generateFromEmail(email, 3);

        const user = await User.create({email: email, password: hashPassword, name: username, activationLink});
        // await MailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        await UserInfoService.create(userDto.id);
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
        const userData = TokenService.validateRefreshToken(refreshToken);
        const tokenDromDb = await TokenService.findToken(refreshToken);
        if(!userData || !tokenDromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await User.findByPk(userData.id);

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});
        
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: UserDto};
    }

    async getUserOne(refreshToken) {
        const data = await Token.findOne({where: {refreshToken}});
        if(!data) {
            return ApiError.badRequest('Такого пользователя не существует или неверный refreshToken');
        }
        const userData = await User.findOne({where: {id: data.user_id}});
        return userData;
    }
}

export default new UserService();