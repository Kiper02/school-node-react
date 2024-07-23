import AchievementService from "../services/AchievementService.js";

class AchievementController {
    async create(req, res, next) {
        try {
            const {name, description} = req.body;
            const {picture} = req.files;
            const achievementData = await AchievementService.create(name, picture, description)
            return res.json(achievementData);
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const id = req.params.id;
            const achievementData = await AchievementService.getOne(id);
            return res.json(achievementData);
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            const achievementData = await AchievementService.getAll();
            return res.json(achievementData);
        } catch (error) {
            next(error)
        }
    }
}

export default new AchievementController();