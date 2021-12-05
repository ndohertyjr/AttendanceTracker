/*
    Functions to parse through local json files and add data to db
*/
const fs = require('fs');

// static data imports
const { User, Class, Attendance } = require('../models/db');
const userList = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));
const classList = JSON.parse(fs.readFileSync('./data/classes.json', 'utf-8'));
const attendanceList = JSON.parse(fs.readFileSync('./data/attendance.json', 'utf-8'));



module.exports = loadData = function() {

    for (var i = 0; i < userList.length; i++) {
 
        User.create(userList[i])
            .then(() => {
                console.log("User added!");
            })
            .catch(err => {
                console.log("Failed to add user");
            })
    }

    for (var i = 0; i < classList.length; i++) {

        Class.create(classList[i])
            .then(() => {
                console.log("Class/section added!");
            })
            .catch(err => {
                console.log("Failed to add class/section.");
            })
    }

    for (var i = 0; i < attendanceList.length; i++) {

        Attendance.create(attendanceList[i])
            .then(() => {
                console.log("Attendance info added!");
            })
            .catch(err => {
                console.log("Failed to add attendance info.");
            })
    }
}
