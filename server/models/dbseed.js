/* Creates the AWS RDS DB.  Current DB info:
    Engine: Postgres
    Version: 12.8
*/
require('dotenv').config();
const mysql = require('mysql');
const dbURI = process.env.DB_URI;
const dbName = process.env.DB_NAME;


//Assign DB connection variables
const conn = mysql.createConnection({
    host: dbURI,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

//Connect to DB
conn.connect(function(err) {
    if (err) {
        console.log('Connection failed!');
        throw err;
    }
    console.log("Connected");
    conn.end();
});

