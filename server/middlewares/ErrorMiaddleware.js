import ApiError from "../exceptions/ApiError.js";

export default function(err, req, res, next) {
    console.log(err);
    if(err instanceof ApiError) {
        console.log(err.message);
        console.log({message: err.message, errors: err.errors});
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }

    return res.status(500).json({message: 'Непредвиденная ошибка'});
}
