import TypeService from "../services/TypeService.js";

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const typeData = await TypeService.create(name);
            return res.json(typeData);
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.body
            const typeData = await TypeService.getOne(id);
            return res.json(typeData); 
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            const typeData = await TypeService.getAll();
            return res.json(typeData);
        } catch (error) {
            next(error)
        }
    }
}

export default new TypeController();