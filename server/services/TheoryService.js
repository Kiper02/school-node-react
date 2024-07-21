import { Theory } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";

class TheoryService {
    async create(data) {
        const theory = await Theory.create({
            name: data.name,
            description: data.description,
            text: data.text,
            task_id: data.task_id
        })

        return theory;
    }

    async getOne(id) {
        const theory = await Theory.findByPk(id);
        if(!theory) {
            throw ApiError.badRequest('Такой записи не существует');
        }
        return theory;
    }

    async getAll() {
        const theories = await Theory.findAll();
        return theories;
    }
}

export default new TheoryService();