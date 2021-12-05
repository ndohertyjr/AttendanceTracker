const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const winston = require('winston'),
    expressWinston = require('express-winston');

// Router files
const authenticationRouter = require('./controllers/authentication');
const studentRouter = require('./controllers/student');
const teacherRouter = require('./controllers/teacher');

const port = process.env.PORT || 8080;

//file system for importing json data
var fs = require('fs');


//FIXME: ADD WINSTON LOGGING

//needed for login
const passport = require('passport');
require('./config/passport');
const { User, Class, Attendance } = require('./models/db');

// Static data import
const loadData  = require('./data/loadData');
loadData();

// Initialize express and options
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(passport.initialize());

// Allow CORS
app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
})


// Catch unauthorized error and create 401
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res
        .status(401)
        .json({"message": err.name + ": " + err.message});
    }
  });


// Router paths
app.use('/auth', authenticationRouter);
//app.use('/studentDashboard', studentRouter);
//app.use('/teacherDashboard', teacherRouter);




app.use('/login', (req, res) => {
    
});


// Test Get route to sync to react
app.get('/express_backend', (req, res) => {
    res.send({express: 'Backend connected to frontend'});
});

app.get('/test', (req, res) => {
    res.send({express: 'Test route works'});
});

app.get('/', (req, res) => {
    res.send({express: 'Test login'});
});



//Display port that Express server is listening on
app.listen(port, () => {
    console.log(`Server listening on port ${port}`
    )}
);

