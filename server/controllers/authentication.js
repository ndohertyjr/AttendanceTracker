/* 
    Authentication Controller
    Validates login request with database.
    Future updates will include register function
*/

const passport = require('passport');



// Login function
const login = (req, res) => {
    console.log("authController: Login function beginning");
    
    // Error handling if data is missing 
    if (!req.body.username || !req.body.password) {
        console.log("authController-login: Username or password fail")
        return res
            .status(400)
            .json({ "message": "All fields required."});
    }

    // Authenticate using local strategy
    console.log("authController: About to authenticate");
    passport.authenticate('local', (err, user, info) => {
        console.log("authController-authenticate: Inside function")
        if (err) {
            console.log("authController: Auth Error");
            return res
                .status(404)
                .json(err);
        }

        if (user) {
            const token = user.generateJWT();
            return res
                .status(200)
                .json({token: token})
        } else {
            return res
                .status(401)
                .json(info);
        } 
    }) (req, res);

};



module.exports = {
    login    
}
