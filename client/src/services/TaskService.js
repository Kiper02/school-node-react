import $api from "../http/index";


export default class TaskService {
    static async create(type, name, description, exp){
        return $api.post('/task', {type, name, description, exp});
    }

    static async getAll(){
        return $api.get('/task');
    }

    static async getOne(id){
        return $api.get(`/task/${id}`);
    }

    static async editTask(id, status) {
        return $api.patch('/task', {id, status})
    }
}