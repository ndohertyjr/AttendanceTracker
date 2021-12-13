require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8080;

//needed for login
require('./config/passport');

// Router index
const routerIndex = require('./routes/index');

// Static data import
const loadData  = require('./data/loadData');
loadData();

// Initialize express and options

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());



//allow CORS and set response headers
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Router path
app.use('/api', routerIndex);


//Display port that Express server is listening on
app.listen(port, () => {
    console.log(`Server listening on port ${port}`
    )}
);

