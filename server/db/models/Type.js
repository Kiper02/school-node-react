import { DataTypes } from "sequelize";
import sequelize from "../db.js";


const Type = sequelize.define('Type', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true}
})


export default Type;