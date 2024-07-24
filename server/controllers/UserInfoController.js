import UserInfoService from "../services/UserInfoService.js";

class UserInfoController {
    // async create(req, res, next) {
    //     try {
    //         let img;
    //         if(req.files) {
    //             img = req.files.img
    //         }

    //         const typeInfoData = await UserInfoService.create(req.body, img);
    //         return res.json(typeInfoData);
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const typeInfoData = await UserInfoService.getOne(id);
            return res.json(typeInfoData);
        } catch (error) {
            next(error)
        }
    }
}

export default new UserInfoController();