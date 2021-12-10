/*
    Student controller to help query User table and provide data for student dashboard
*/

const { sequelize } = require('../models/db');
const User = sequelize.models.users;
const Class = sequelize.models.classes;
const Attendance = sequelize.models.attendance;


/*
    Retrieve logged in student by using ID in the header of JWT.  Queries
    User table for a record and joins Attendance and Classes tables on
    the correct ID.  Maps to Student Dash
*/
const getStudent = async (req, res) => {

    console.log("Student:GetStudent - about to query for ID#" + req.payload.user_id)

    User.findOne({
        where: {
            user_id: req.payload.user_id
        }, include: [{
            model: Class,
            attributes: ['className','classBeginDate'],
            required: false
        }, {
            model: Attendance,
            required: false,
            attributes: ['daysAttended', 'lastAttendanceCheckin']
        }]
    }).then(function(user) {

        if (user) {   
            console.log("Student:GetStudent - student query succeeded")
            return res
                .status(200)
                .json({user})
        } else {
            console.log("Student:GetStudent - student query failed")
            return res
                .status(401)
                .json({message: "User info not located!"});
        } 
    });
}

/*
    Queries the User table for all students.  Returns associated data from Attendance
    and classes tables for all students and associates it by user id.  Used by Teacher controller.
*/

const getAllStudents = async (req, res) => {

    User.findAll({
        where: {
            "role": "student"
        },
        include: [{
            model: Class,
            attributes: ['className','classBeginDate'],
            required: false
        }, {
            model: Attendance,
            required: false,
            attributes: ['daysAttended', 'lastAttendanceCheckin']
        }]
    }).then(function(users) {

        if (users) {   
            console.log("Student:GetAllStudents - query succeeded")
            return res
                .status(200)
                .json({users})
        } else {
            console.log("Student:GetAllStudents - query failed")
            return res
                .status(401)
                .json({message: "User info not located!"});
        } 
    });
}



module.exports = {
    getStudent,
    getAllStudents
}