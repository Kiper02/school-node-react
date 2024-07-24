import $api from "../http/index";

export default class UserService {
    static fetchUserInfo() {
        return $api.get('/userInfo')
    }
}