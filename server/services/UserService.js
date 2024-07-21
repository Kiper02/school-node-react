import User from "../db/models/";

class UserService {
    async registration(password, email) {
        const candidate = await User.findOne({where: {email}});
        
    }

    async login() {

    }

    async logout() {

    }

    async activate() {

    }

    async refresh() {

    }
}

export default new UserService();