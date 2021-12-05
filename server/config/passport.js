/*
    Config for Express Passport middleware.
    This will define the strategy for Passport to authenticate req
    Documentation: http://www.passportjs.org/docs/
*/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { sequelize } = require('../models/db');
const User = sequelize.models.users;

// Passport strategy for validating a user against db
passport.use(new LocalStrategy({
    userNameField: 'username',
    passwordField: 'password'
},
    function(username, password, done) {
        console.log("localStrategy: About to query");
        User.findOne({ where: {
            username: username,
            password: password
            }
        }).then(function(user) {
            console.log("passport: In Local Strategy")
            //Response for invalid usernames
            if (!user) {
                return done(null, false, { message: 'Invalid username.'});
            }
            // Response for invalid passwords
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Invalid password.'});
            }
            
            return done(null, user);
        
        }).catch(err => {console.log(err);
        })
    }
));

// Serialize the user accross http request
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;
