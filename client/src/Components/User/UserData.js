import React, { useState } from "react";
import { useParams } from "react-router-dom";
import attendanceCalculator from '../_helpers/Attendance'
import User from "./User";
import UserTableHeaders from "./UserTableFormat";
import './UserData.css'


/* 
    Display user data and enables/disables attendance login button.  Attendance check in is validated server side as well.
*/
const UserData = ({ user }) => {

    const {lastAttendanceCheckin} = user.attendance;
    const [disabled, setDisabled] = useState(false);

    //Call server to try to update check in
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
                    console.log("Check in successful!");
                    setDisabled(true);
                }
                else {
                    console.log("UserData: onClick put request failed");
                }
            });   
        }

    //Verify if the user has checked in today
    const allowCheckin = prevCheckin => {
        var currCheckin = new Date();
        var lastCheckin = new Date(prevCheckin);
    
            // If lastCheckin occurred on the same date do not validate
        if (currCheckin.getFullYear() === lastCheckin.getFullYear() &&
            currCheckin.getMonth() === lastCheckin.getMonth() &&
            (currCheckin.getDate() - lastCheckin.getDate()) < 1) {
            
            //Allows disabled button to appear
            return false
    
        } else {
            //Button appears enabled
            return true
        }
    }

    return (
        <div className='userContainer'>
            <h1>Welcome to your attendance tracker!</h1>
            <h3>Your current attendance information is:</h3>
            <table className='userTable'>
                <UserTableHeaders />
                <User user={user}/>
            </table>
            <div className="btnWrapper">
             {allowCheckin(lastAttendanceCheckin) ? 
                <button className="checkInBtn" type="button" onClick={onClick} disabled={disabled}>CHECK IN FOR CLASS</button> :
                <button className="checkInBtn" type="button" disabled={true}>CHECK IN FOR CLASS</button>}
            </div>
        </div>

    )
}
export default UserData;

