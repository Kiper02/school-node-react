import { DataTypes } from "sequelize";
import sequelize from "../db.js";

// По умолчанию в массиве ролей будет user, но как только будет произведена оплата и пользователю будет дан доступ к курсам, то в массив ролей будет добавлен "тип" - "student"

const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.JSON, allowNull: false, defaultValue: ['User']},
    cash: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    activationLink: {type: DataTypes.STRING, allowNull: false},
})

export default User;