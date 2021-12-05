/*
    Model for the Users Table of the db
*/


module.exports = (sequelize, type) => {
    return sequelize.define('users', {
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

}


