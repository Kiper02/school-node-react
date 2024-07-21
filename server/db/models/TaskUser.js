import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Task from "./Task.js";
import User from "./User.js";


const TaskUser = sequelize.define('TaskUser', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    task_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: Task, key: 'id'}},
    user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: User, key: 'id'}}
})


export default TaskUser