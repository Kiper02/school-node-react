import TaskService from "../services/TaskService.js";

class TaskController {
    async create(req, res, next) {
        try {
            const taskData = await TaskService.create(req.body);
            return res.json(taskData);
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.body; 
            const taskData = await TaskService.getOne(id);
            return res.json(taskData); 
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            const taskData = await TaskService.getAll();
            return res.json(taskData);
        } catch (error) {
            next(error)
        }
    }

    async editTask(req, res, next) {
        try {
            const {id, status} = req.body;
            const taskData = await TaskService.editTask(id, status);
            return res.json(taskData)
        } catch (error) {
            next(error)
        }
    }
}

export default new TaskController();