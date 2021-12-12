/*
    Model for the Class Table of the db
*/

module.exports = (sequelize, type) => {
    return sequelize.define('classData', {
        section: {
            type:type.STRING(10),
            allowNull:false,
            primaryKey:true
        },
        className: {
            type:type.STRING(30),
            allowNull:false
        },
        classBeginDate: {
            type:type.DATEONLY,
            allowNull:false
        },
        numClassesPerWeek: {
            type:type.INTEGER,
            allowNull:false
        }
    });
}