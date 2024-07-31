import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Task from "./Task.js";



const TaskDependency = sequelize.define('TaskDependency', {
    task_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: Task, key: 'id'}},
    dependency_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: Task, key: 'id'}}
})

export default TaskDependency;