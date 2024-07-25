import axios from 'axios'
import ApiError from '../exceptions/ApiError.js';


export default async function(req, res, next) {
    const apiKey = process.env.API_KEY_EMAIL_VERIFY;
    const email = req.body.email;
    const url = `https://api.emailable.com/v1/verify?email=${email}&api_key=${apiKey}`;
    if(!email) {
        throw ApiError.badRequest('Требуется электронная почта')
    }

    try {
        const response = await axios.get(url);
        console.log(response);
        
        const result = response.data;
        console.log(result.state);

        if(result.state == 'deliverable') {
            next();
        } else {
            throw ApiError.badRequest('Такой почты не существует');
        }
    } catch (error) {
        throw ApiError.internal('Ошибка при запросе на сторонний API');
    }
}