import React from 'react';
import useToken from '../App/useToken'

async function getStudentData() {
    // Login function to validate user info with server 
    // FIXME: Remove log

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    console.log("gettingStudentData function running");
    return fetch('http://localhost:8080/studentDash', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(async response => {
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                //FIXME: Implement function to handle rejected views
                console.log("NOT OK!!!")
            }
            else {
                return data;
            }
        })
}



export default function StudentDashboard() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const greeting = <h1>HEY</h1>


    return (
        <div className="container">
            {greeting}
        </div>
        
    );
}
