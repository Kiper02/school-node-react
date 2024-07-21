import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";


const Token = sequelize.define('Token', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    refreshToken: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: User, key: 'id'}}
})


export default Token;