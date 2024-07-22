import UserInfoService from "../services/UserInfoService.js";

class UserInfoController {
    async create(req, res, next) {
        try {
            const typeInfoData = await UserInfoService.create(req.body);
            return res.json(typeInfoData);
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.body;
            const typeInfoData = await UserInfoService.getOne(id);
            return res.json(typeInfoData);
        } catch (error) {
            next(error)
        }
    }
}

export default new UserInfoController();