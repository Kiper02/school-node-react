import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Task from "./Task.js";


const Theory = sequelize.define('Theory', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    // description: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.TEXT('long'), allowNull: false},
    // type: {type: DataTypes.STRING, allowNull: false},
    task_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: Task, key: 'id'}}
})

export default Theory;