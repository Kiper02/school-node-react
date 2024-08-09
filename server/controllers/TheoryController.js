import TheoryService from "../services/TheoryService.js";

class TheoryController {
    async create(req, res, next) {
        try {
            const theoryData = await TheoryService.create(req.body);
            return res.json(theoryData);
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.body;
            console.log(id);
            const theoryData = await TheoryService.getOne(id);
            return res.json(theoryData);
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            const theoryData = await TheoryService.getAll();
            return res.json(theoryData);
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            const {id} = req.body;
            const theoryData = await TheoryService.remove(id);
            return res.json(theoryData);
        } catch (error) {
            next(error)
        }
    }
}

export default new TheoryController();