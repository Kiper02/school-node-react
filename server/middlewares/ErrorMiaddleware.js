import ApiError from "../exceptions/ApiError.js";

export default function(err, req, res, next) {
    if(err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: message.errors})
    }

    return res.status(500).json({message: 'Непредвиденная ошибка'});
}