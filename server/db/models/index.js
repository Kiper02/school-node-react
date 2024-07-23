import Achievemnt from "./Achievement.js";
import Task from "./Task.js";
import TaskUser from "./TaskUser.js";
import Theory from "./Theory.js";
import Token from "./Token.js";
import Type from "./Type.js";
import User from "./User.js";
import UserAchievement from "./UserAchievement.js";
import UserInfo from "./UserInfo.js";



User.hasOne(UserInfo);
UserInfo.belongsTo(User);

User.belongsToMany(Achievemnt, {through: UserAchievement});
Achievemnt.belongsToMany(User, {through: UserAchievement});

User.belongsToMany(Task, {through: TaskUser});
Task.belongsToMany(User, {through: TaskUser});

User.hasOne(Token);
Token.belongsTo(User);

Task.hasOne(Theory);
Theory.belongsTo(Task);

Type.hasMany(Task, {foreignKey: 'type_id'});
Task.belongsTo(Type, {foreignKey: 'type_id'});


export {
    Achievemnt,
    Task,
    Theory,
    Type,
    User,
    Token,
    UserInfo
}