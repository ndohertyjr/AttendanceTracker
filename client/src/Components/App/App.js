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

export default function App() {

    //Store session token, if not logged in, login screen shows
    const [token, setToken] = useState();
    if (!token) {
        return <Login setToken={setToken} />
    }
    
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