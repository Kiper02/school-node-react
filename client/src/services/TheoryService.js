import $api from "../http/index";


export default class TheoryService {
    static async create(name, text, task_id){
        return $api.post('/theory', {name, text, task_id});
    }

    static async getAll(){
        return $api.get('/theory');
    }

    static async getOne(id){
        return $api.get('/theory', {id});
    }

    static async remove(id) {
        return $api.patch('/theory', {id})
    }
}