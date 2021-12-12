import React, { useState } from "react";
import { useParams } from "react-router-dom";
import attendanceCalculator from '../_helpers/Attendance'
import User from "./User";
import UserTableHeaders from "./UserTableFormat";



const onClick = async event => {
    fetch('http://localhost:8080/api/attendanceUpdates', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
        .then(data => data.json())
        .then(data => {
            
            //FIXME: ADD TOAST
            
            if (data) {
                console.log("Check in successful!")
            }
        })
    }

const allowCheckin = prevCheckin => {
    var currCheckin = new Date()
    var lastCheckin = new Date(prevCheckin)

        // If lastCheckin occurred on the same date do not validate
    if (currCheckin.getFullYear() === lastCheckin.getFullYear() &&
        currCheckin.getMonth() === lastCheckin.getMonth() &&
        (currCheckin.getDate() - lastCheckin.getDate()) < 1) {

        return <button className="checkInBtn" type="button" disabled={true}>CHECK IN FOR CLASS</button>

    } else {

        return <button className="checkInBtn" type="button" onClick={onClick}>CHECK IN FOR CLASS</button>
    }
}


const UserData = ({ user }) => {

    const {lastAttendanceCheckin} = user.attendance;
    
    return (
        <div className='userContainer'>
            <h1>Welcome to your attendance tracker!</h1>
            <h3>Your current attendance information is:</h3>
            <table>
                <UserTableHeaders />
                <User user={user}/>
            </table>
            {allowCheckin(lastAttendanceCheckin)}
            
        </div>

    )
}
export default UserData;

