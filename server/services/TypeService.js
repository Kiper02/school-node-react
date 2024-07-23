import { Type } from "../db/models/index.js";
import ApiError from "../exceptions/ApiError.js";

class TypeService {
    async create(name) {
        const typeCandidate = await Type.findOne({where: {name}});
        if(typeCandidate) {
            throw ApiError.badRequest('Такой тип уже существует');
        }
        const type = await Type.create({name});
        return type;
    }

    async getOne(id) {
        const type = await Type.findByPk(id);
        if(!type) {
            throw ApiError.badRequest('Такого "типа" не существует')
        }
        
        return type;
    }

    async getAll() {
        const types = await Type.findAll();
        return types;
    }
}

export default new TypeService();