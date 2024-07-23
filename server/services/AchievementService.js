import { Achievement, User } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";
import {v4 as uuidv4} from 'uuid'
import path from 'path'

class AchievementService {
    async create(name, picture, description) {
        const achievementCandidate = await Achievement.findOne({where: {name}});
        if(achievementCandidate) {
            throw ApiError.badRequest('Запись с таким названием уже существует')
        }
        let fileName = uuidv4() + ".jpg";
        const __dirname = path.resolve();
        const filePath = path.join(__dirname, "..", "server","static", "achievements", fileName);
        picture.mv(filePath, (err) => {
            if(err) {
                console.log(err);
                throw ApiError.internal('Ошибка при загрузке файла')
            }
        });
        const achievement = await Achievement.create({
            name,
            picture: fileName,
            description,
        })
        return achievement;
    }

    async getOne(id) {
        const achievement = await Achievement.findByPk(id)
        if(!achievement) {
            throw ApiError.badRequest('Такого достижения не существует')
        }
        return achievement;
    }

    async getAll() {
        const achievements = await Achievement.findAll();
        return achievements;
    }
}

export default new AchievementService();