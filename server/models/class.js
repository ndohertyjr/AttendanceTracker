/*
    Model for the Class Table of the db
*/

const { DATEONLY } = require("sequelize/dist");

module.exports = (sequelize, type) => {
    return sequelize.define('classes', {
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
        }
    });
}