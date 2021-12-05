const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cors = require('cors')
const app = express();
const winston = require('winston'),
    expressWinston = require('express-winston');
const port = process.env.PORT || 8080;


//FIXME: ADD WINSTON LOGGING

//needed for login
const passport = require('passport');
const { User, Student, Teacher, Class, Attendance } = require('./models/db');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//imports
var userData = require('./data/users.json')
const userList = JSON.parse(JSON.stringify(userData))

/*
for (var i = 0; i < userList.length; i++) {
    User.create(userList[i])
        .then(() => {
            console.log("User added!");
        })
        .catch(err => {
            console.log(err);
        })
}
*/





app.use('/login', (req, res) => {
    console.log("Server request: " + req.body.username)
    res.send({
        token: 'test123'
    });
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

