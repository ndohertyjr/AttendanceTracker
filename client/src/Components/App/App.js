import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


//route imports
import Login from '../Login/Login';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

//import Login from './Components/Login.js';

export default class App extends Component {
    render() {
    return (
           
        <div className="wrapper">
            <BrowserRouter>
                <Header />
                <Routes path="/">
                    <Route path="" element={<Login />} />
                    <Route path="studentDashboard" element={<StudentDashboard />} /> 
                    <Route path="teacherDashboard" element={<TeacherDashboard />} />                          
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
   
        
    );
    }
 
}