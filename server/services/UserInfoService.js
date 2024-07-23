import { UserInfo } from "../db/models/index.js";
import faker from 'faker'
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import ApiError from "../exceptions/ApiError.js";

class UserInfoService {
    async create(data, img) {
        const firstname = faker.name.firstName();
        const surname = faker.name.lastName();
        

        let userInfo;
        if(!img) {
            userInfo = await UserInfo.create({
                firstname: firstname,
                surname: surname,
                user_id: data.user_id
            })
        } else {
            let fileName = uuidv4() + ".jpg"
            const __dirname = path.resolve();
            img.mv(path.join(__dirname, "..", "server","static", fileName));

            userInfo = await UserInfo.create({
                firstname: firstname,
                surname: surname,
                profile_picture: fileName,
                user_id: data.user_id,
            })
        }
        return userInfo;
    }

    async getOne(id) {
        const userInfo = await UserInfo.findByPk(id);
        if(!userInfo) {
            throw ApiError.badRequest('Нет такой записи');
        }

        return userInfo;
    }
}

export default new UserInfoService();