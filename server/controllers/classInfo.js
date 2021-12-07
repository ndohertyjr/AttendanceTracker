/*
    Controller to read class and section information from db
*/

const { sequelize } = require('../models/db');
const Class = sequelize.models.classes;

// Query database using a specific class section to return the class name
const getAllClasses = async (req, res) => {
    
    console.log("ClassInfo:getClassName - starting query ");
    
    Class.findAll({})
        .then(function(classInfo, ) {
        
        if (classInfo) {
            
            return res
                .status(200)
                .json(classInfo);

        } else {
            console.log("ClassInfo:getAllClasses - Query failed");

            return res
                .status(400)
                .send({ message: "Bad request.  Query failed!" });
        }
        
    });
}

module.exports = {
    getAllClasses
}