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
const studentController = require('../controllers/student');
const teacherController = require('../controllers/teacher');

router  
    .route('/auth')
    .post(authController.login);

/*
router
    .route('/studentDashboard');

router
    .route('/teacherDashboard');
    */

module.exports = router;