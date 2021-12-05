import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


//route imports
import Login from '../Login/Login';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import useToken from './useToken';


export default function App() {

    //Get session token. If not logged in, login screen shows
    const {token, setToken} = useToken();

    if (!token) {
        return (
        <div>
            <Header />   
            <Login setToken={setToken} />
            <Footer />
        </div>
        )
    }
    
    
    return (
        
        <div className="wrapper">
            <BrowserRouter>
                <Header />
                <Routes path="/">
                    <Route path="studentDashboard" element={<StudentDashboard />} /> 
                    <Route path="teacherDashboard" element={<TeacherDashboard />} />                          
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
            
    );
    
 
}