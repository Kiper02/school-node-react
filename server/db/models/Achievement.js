import { DataTypes } from "sequelize";
import sequelize from "../db.js";


const Achievement = sequelize.define('Achievement', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    picture: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

export default Achievement;