/*
    Index for backend routing using express-jwt middleware
    Documentation: https://www.npmjs.com/package/express-jwt
*/

const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'payload'
});

const authController = require('../controllers/authentication');
const studentController = require('../controllers/studentData');
const attendanceController = require('../controllers/attendance');
const classController = require('../controllers/classInfo')



router  
    .route('/auth')
    .post(authController.login);

router
    .route('/studentDash')
    .get(auth, studentController.getStudent);

router
    .route('/attendanceUpdates')
    .put(auth, attendanceController.updateCheckinTime);

router
    .route('/teacherDash')
    .get(auth, studentController.getAllStudents);

router
    .route('/classList')
    .get(auth, classController.getAllClasses)


    

module.exports = router;