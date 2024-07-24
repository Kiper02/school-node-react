import $api from "../http/index";


export default class TaskService {
    static async create(name, description, exp){
        return $api.post('/task', {name, description, exp});
    }

    static async getAll(){
        return $api.get('/task');
    }

    static async getOne(){
        return $api.get('/task/:id');
    }
}