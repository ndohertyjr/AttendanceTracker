/*
    Attendance controller to update attendance table
*/

const { sequelize } = require('../models/db');
const Attendance = sequelize.models.attendance;



const updateCheckinTime = async (req, res) => {

    const userId = req.payload.user_id;

    console.log("AttendanceController: updateCheckinTime - Beginning")
    const userDataValidation = await Attendance.findOne({
        where: {
            id: userId
        }
    });

    // Obtain current data information and validate user has not logged in today
    const currCheckin = new Date();
    const lastCheckin = await getLastCheckin(userId)
    console.log(lastCheckin)
  
    const checkinAllowed = validateLastCheckin(currCheckin, lastCheckin) 
    
    console.log(checkinAllowed)

    if (userDataValidation && checkinAllowed) {
        Attendance.update({
            lastAttendanceCheckin: currCheckin
        }, {
            where: {
                id: userId
            }
        }).then(result => {
            if (result) {
                updateDaysAttended(userId)
                res
                    .status(200)
                    .json({message:"Check in successful!"})
            } else {
                res
                    .status(401)
                    .json({message: "Update check in failed!"})
            }
        })
    } else {
        res
            .status(401)
            .json({message:"User has already checked in today"})
    }  
}

//Queries table to get last check in info
const getLastCheckin = async user_id => {
    console.log("AttendanceController:getLastCheckin - beginning")
    const lastDate = await Attendance.findOne({
        where: {
            id: user_id
        }
    });

    if (lastDate) {         

        return lastDate.lastAttendanceCheckin
    } else {
        console.log("No prior checkin data")
    }
}
    

// If currCheckin occurs on the same day as lastCheckin, do not allow to check in
const validateLastCheckin = (currCheckin, lastCheckin) => {
    
    // If no lastCheckin data, return OK to validate
    if (lastCheckin === null) {

        return true
    }
    // If lastCheckin occurred on the same date do not validate
    if (currCheckin.getFullYear() === lastCheckin.getFullYear() &&
        currCheckin.getMonth() === lastCheckin.getMonth() &&
        (currCheckin.getDate() - lastCheckin.getDate()) < 1) {

            return false
    } else {

            return true
        }
}

const updateDaysAttended = user_id => {

    Attendance.update({
        daysAttended: sequelize.literal('daysAttended + 1')
    }, {
        where: {
            id: user_id
        }
    })
}

module.exports = {
    updateCheckinTime,
    getLastCheckin, 
    validateLastCheckin
}
