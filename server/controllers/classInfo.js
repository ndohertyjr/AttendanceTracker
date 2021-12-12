/*
    Controller to read class and section information from db
*/

const { sequelize } = require('../models/db');
const ClassData = sequelize.models.classData;


// Query database to return all classes
const getAllClasses = async (req, res) => {
    
    console.log("ClassInfo:getClassName - starting query ");
    
    ClassData.findAll({})
        .then(function(classInfo) {
        
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