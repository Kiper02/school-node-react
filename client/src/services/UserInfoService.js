import $api from "../http/index";


export default class UserInfoService {
    static async getOne(id){
        return $api.get(`/userInfo/${id}`);
    }
}