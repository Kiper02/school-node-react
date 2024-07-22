import { Task } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";

class TaskService {
    async create(data) {
        const task = await Task.create({
            type: data.type_id,
            name: data.name,
            description: data.description,
            exp: data.exp,
            status: data.status,
            task_id: data.task_id
        })

        return task;
    }

    async getOne(id) {
        const task = await Task.findByPk(id)
        if(!task) {
            throw ApiError.badRequest('Такой задачи не существует');
        }

        return task;
    }

    async getAll() {
        const tasks = await Task.findAll();
        return tasks;
    }
}

export default new TaskService();