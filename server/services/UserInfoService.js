import { UserInfo } from "../db/models/index.js";
import faker from 'faker'
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import ApiError from "../exceptions/ApiError.js";

class UserInfoService {
    async create(id) {
        const firstname = faker.name.firstName();
        const surname = faker.name.lastName();

        const userInfo = await UserInfo.create({
            firstname: firstname,
            surname: surname,
            user_id: id
        })
            
        return userInfo;
    }

    async getOne(id) {
        const userInfo = await UserInfo.findOne({where: {user_id: id}});
        if(!userInfo) {
            throw ApiError.badRequest('Нет такой записи');
        }

        return userInfo;
    }
}

export default new UserInfoService();