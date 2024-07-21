import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";


const UserInfo = sequelize.define('UserInfo', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    profile_picture: {type: DataTypes.STRING, allowNull: true},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    exp: {type: DataTypes.INTEGER, defaultValue: 0},
    lvl: {type: DataTypes.INTEGER, defaultValue: 0},
    user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: User, key: 'id'}}
})

export default UserInfo;