import React, { useState } from 'react';

import PropTypes from 'prop-types';
import './Login.css'

const logo = (
    <img src="/AT5000_logo.png" alt="Attendance Tracker 5000" />
)

// Sets whether setToken prop will be required
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

// Login function to validate user info with server 
async function loginUser(credentials) {
    // FIXME: Remove log
    console.log("loginUser function running");
    console.log(credentials);
    console.log(JSON.stringify(credentials));
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

//Main login function.  Accepts setToken parameter to determine if logged in
export default function Login({ setToken }){

    //Hooks to return state values for user login information
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    //Function called when form is submitted, sends user info to loginUser
    const handleSubmit = async event => {
        event.preventDefault();

        // FIXME: Remove log comment
        console.log("handleSubmit getting token")
        const token = await loginUser({
            username,
            password
        });
        setToken(token);

        // FIXME: Remove log
        if (token) {
            console.log("handleSubmit token obtained")
        }
    }
 
    return (
        <div className="loginPage">
            <div className="imageContainer">
                {logo}
            </div>
            <div className="loginWrapper">
                <form className="loginForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" id="username" 
                        name="username" placeholder="Enter Username"
                        onChange={e => setUserName(e.target.value)} />
                    <input 
                        type="password" id="password"
                        name="password" placeholder="Enter Password"
                        onChange={e => setPassword(e.target.value)} />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
    
    
}


