import React, { Component } from 'react';
import './Login.css'

const logo = (
    <img src="/AT5000_logo.png" alt="Attendance Tracker 5000" />
)
/*  Login component */

export default class Login extends Component {

    render() {
        return (
            <div className="loginPage">
                <div className="imageContainer">
                    {logo}
                </div>
                <div className="loginWrapper">
                    <form className="loginForm">
                        <input type="text" id="username" name="username" placeholder="Enter Username"/>
                        <input type="password" id="password" name="password" placeholder="Enter Password"/>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
}


