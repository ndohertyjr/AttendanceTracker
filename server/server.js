require("dotenv").config();

const express = require('express');
const app = express();
const createError = require('http-errors');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const winston = require('winston'),
    expressWinston = require('express-winston');

//needed for login
const passport = require('passport');
require('./config/passport');
const { User, Class, Attendance } = require('./models/db');

// Router index
const routerIndex = require('./routes/index');


const port = process.env.PORT || 8080;

//file system for importing json data
var fs = require('fs');


//FIXME: ADD WINSTON LOGGING



// Static data import
const loadData  = require('./data/loadData');
loadData();

// Initialize express and options

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());



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
app.use('/', routerIndex);


//Display port that Express server is listening on
app.listen(port, () => {
    console.log(`Server listening on port ${port}`
    )}
);

