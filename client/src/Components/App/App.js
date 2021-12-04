import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


//route imports
import Login from '../Login/Login';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';

//import Login from './Components/Login.js';

export default class App extends Component {
    render() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes path="/">
                    <Route path="login" element={<Login />} />
                    <Route path="studentDashboard" element={<StudentDashboard />} /> 
                    <Route path="teacherDashboard" element={<TeacherDashboard />} />                          
                </Routes>
            </BrowserRouter>
        </div>
    );
    }
 
}