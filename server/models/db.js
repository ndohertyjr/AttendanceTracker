/* 
    Creates the AWS RDS DB.  Current DB info:
        Engine: Aurora
        Version: 5.7.mysql_aurora.2.07.2
*/

//Import required models and packages
require('dotenv').config();
//FIXME: CHANGE ONCE DONE TESTING
const { Sequelize, Model} = require('sequelize');
const mysql = require('mysql');
const UserModel = require('./user');
const ClassModel = require('./class');
const AttendanceModel = require('./attendance');
const user = require('./user');


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
const Class = ClassModel(sequelize, Sequelize);
const Attendance = AttendanceModel(sequelize, Sequelize);

// Force update tables
//FIXME: SET FORCE FALSY FOR PROD
sequelize.sync()
    .then(() => {
        console.log("All tables created!")
    })
    .catch(err => {console.log("Refresh Failed!")})


module.exports = {
    User,
    Class,
    Attendance,
    sequelize
}