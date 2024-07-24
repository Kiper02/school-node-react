import $api from "../http/index";


export default class TypeService {
    static async create(name){
        return $api.post('/type', {name});
    }

    static async getAll(){
        return $api.get('/type');
    }

    static async getOne(){
        return $api.get('/type/:id');
    }
}