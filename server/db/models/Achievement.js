import { DataTypes } from "sequelize";
import sequelize from "../db.js";


const Achievemnt = sequelize.define('Achievemnt', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    picture: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

export default Achievemnt;