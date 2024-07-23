import { Task, Type } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";

class TaskService {
    async create(data) {
        const type = await Type.findOne({where: {name: data.type}});
        
        // const taskCandidate = await Task.findOne({where: {name: data.name}});
        // if(taskCandidate) {
        //     throw ApiError.badRequest('Задача с таким именем уже существует');
        // }

        const task = await Task.create({
            type_id: type.id,
            name: data.name,
            description: data.description,
            exp: data.exp,
            status: data.status,
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