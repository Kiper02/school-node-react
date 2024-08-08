import { Task, Theory, Type } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";

class TheoryService {
    async create(data) {

        const theory = await Theory.create({
            name: data.name,
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

    async remove(id) {
        const theory = await Theory.destroy({where: id});
        if(theory === 0) {
            throw ApiError.badRequest('Такой записи не сущетсвует')
        }
        return theory;
    }
}

export default new TheoryService();