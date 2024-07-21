import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";

const Task = sequelize.define('Task', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    description: {type: DataTypes.STRING, allowNull: false},
    exp: {type: DataTypes.INTEGER, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'Not Started'},
    user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: User, key: 'id'}}
})

export default Task;