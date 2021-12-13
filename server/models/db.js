/* 
    Creates the AWS RDS DB.  Current DB info:
        Engine: Aurora
        Version: 5.7.mysql_aurora.2.07.2
*/

//Import required models and packages
require('dotenv').config();

const { Sequelize} = require('sequelize');
const UserModel = require('./user');
const ClassModel = require('./classModel');
const AttendanceModel = require('./attendance');


//DB specific variables
const dbURI = process.env.DB_URI;
const dbName = process.env.DB_NAME;
const dbAdmin = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

//DB instance
const sequelize = new Sequelize(
    `${dbName}`,
    `${dbAdmin}`,
    `${dbPassword}`, {
        dialect: 'mysql',
        host: `${dbURI}`,
        // FIXME: LOG OUTPUT FOR SEQUELIZE
        logging: false
    });

// FIXME: Implement connection test logging
const connSuccess = function () {
    sequelize.authenticate()
    .then(() => {
    console.log("Connected to the database!")
    })
    .catch(err => {
    console.log("Database connection failed!");
    })
};


// Instantiate db tables
const User = UserModel(sequelize, Sequelize);
const ClassData = ClassModel(sequelize, Sequelize);
const Attendance = AttendanceModel(sequelize, Sequelize);

//Set associations
ClassData.hasMany(User, {foreignKey: 'section', sourceKey: 'section'});
User.belongsTo(ClassData, {foreignKey: 'section', sourceKey: 'section'});
Attendance.belongsTo(User, {foreignKey: 'user_id', sourceKey: 'id'});
User.hasOne(Attendance, {foreignKey: 'id', sourceKey: 'user_id'});



// Force update tables
//FIXME: SET FORCE FALSY FOR PROD
sequelize.sync({force: false})
    .then(() => {
        console.log("All tables created!!")
    })
    .catch(err => {console.log("Refresh Failed!")})


module.exports = {
    User,
    ClassData,
    Attendance,
    sequelize
}