import { Task, Theory, Type } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";

class TheoryService {
    async create(data) {


        const task = await Task.findOne({
            include: [{
                model: Type,
                where: {name: data.type}
            }],
            where: {name: data.task}
        })

        const theory = await Theory.create({
            name: data.name,
            description: data.description,
            text: data.text,
            type: data.type,
            task_id: task.id
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