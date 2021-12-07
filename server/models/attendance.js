/*
    Model for the Attendance Table of the db
*/

module.exports = (sequelize, type) => {
    return sequelize.define('attendance', {
        id: {
            type:type.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        daysAttended: {
            type: type.INTEGER,

        },
        lastAttendanceCheckin: {
            type:type.DATE,
        }
    }, { 
        freezeTableName: true
    });
}