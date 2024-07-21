import jwt from 'jsonwebtoken'
import { Token } from '../db/models/index.js';

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(user_id, refreshToken) {
        const tokenData = await Token.findOne({where: {user_id}});
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await Token.create({user_id, refreshToken});
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({where: {refreshToken}});
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}});
        return tokenData;
    }
}



export default TokenService();