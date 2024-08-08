import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Type from "./Type.js";

const Task = sequelize.define('Task', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    exp: {type: DataTypes.INTEGER, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'Not Started'},
    type_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: Type, key: 'id'}}
})

export default Task;