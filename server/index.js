import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import sequelize from './db/db.js';
import router from './routes/index.js';
import ErrorMiaddleware from './middlewares/ErrorMiaddleware.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({}))
app.use('/api', router);


app.use(ErrorMiaddleware);

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: true});

        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}


start();