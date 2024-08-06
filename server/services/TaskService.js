import { Task, Type, TaskDependency } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";

class TaskService {
    async create(data) {
        const type = await Type.findOne({where: {name: data.type}});

        const task = await Task.create({
            type_id: type.id,
            name: data.name,
            description: data.description,
            exp: data.exp,
            status: data.status,
        })
        if(data.dep) {
            const dep = await Task.findOne({where: {name: data.dep}});
            await TaskDependency.create({task_id: task.id, dependency_id: dep.id});
        }


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
        // const tasks = await Task.findAll();
        const tasks = await Task.findAll({
            include: [{model: Task, as: 'Dependencies'}]
        });
        return tasks;
    }
}

export default new TaskService();