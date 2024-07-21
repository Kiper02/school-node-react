import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";
import Achievemnt from "./Achievement.js";


const UserAchievement = sequelize.define('UserAchievement', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: User, key: 'id'}},
    achievement_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: Achievemnt, key: 'id'}}
})

export default UserAchievement;