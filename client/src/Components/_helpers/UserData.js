import React from "react";
import { useParams } from "react-router-dom";
import attendanceCalculator from '../_helpers/Attendance'



const onClick = async event => {
    fetch('http://localhost:8080/api/studentDash', {
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


function checkInButton() {

    return (
        <button className="buttonCheckin" onClick={onClick}>
        Click Here To Sign In
        </button>
    )
}


const UserData = ({ user }) => {

    //destructure object
    const { username, user_id, firstName, lastName, section, attendance} = user;
    console.log("TESTING User DATA")

    console.log(attendance);
    
    return (
        <div className='userContainer'>
            <h1>Welcome to your attendance tracker, {firstName} {lastName}!</h1>
            <h3>Your current user info is:</h3>
            <table>
                <thead>
                    <tr>
                        <th>User ID:</th>
                        <th>Name:</th>
                        <th>Class Name:</th>
                        <th>Section:</th>
                        <th>Attendance Percentage:</th>
                    </tr>
                    <tr>
                        <td>{user_id}</td>
                        <td>{lastName}, {firstName}</td>
                        <td>{user['class'].className}</td>
                        <td>{section}</td>
                        <td>{`${attendanceCalculator(attendance['daysAttended'])}%`}</td>
                        <td>{checkInButton}</td>
                    </tr>
                </thead>
            </table>
        </div>

    )
}
export default UserData;

