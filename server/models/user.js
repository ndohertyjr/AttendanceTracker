/*
    Model for the Users Table of the db
*/

const jwt = require('jsonwebtoken');

module.exports = (sequelize, type) => {
    var User = sequelize.define('users', {
        user_id: {
            type:type.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        username: {
            type:type.STRING(15),
            allowNull:false
        },
        firstName: {
            type:type.STRING(20),
            allowNull:true
        },
        lastName: {
            type:type.STRING(20),
            allowNull:false
        },        
        password: {
            type:type.STRING(20),
            allowNull:false
        },
        role: {
            type:type.STRING(7),
            allowNull:false
        },
        section: {
            type:type.STRING(15),
            allowNull:true
        }
    });

    //Validate a user's password 
    //FIXME: ADD ENCRYPTION
    User.prototype.validPassword = function(password) {
        console.log('test!')
        return true;
    }

    // Generate JWT for the user that is valid for 7 days
    User.prototype.generateJWT = function() {
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

     
        return jwt.sign({
            user_id: this.user_id,
            username: this.username,
            exp: parseInt(expiry.getTime() / 1000, 10),
        }, process.env.JWT_SECRET);

    }

    return User;

}


