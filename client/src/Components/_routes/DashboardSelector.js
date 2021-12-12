import React from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';


export default function DashboardSelector({token}) {

    const decoded = jwt(token)    

    if (decoded.role === 'student') {
        console.log("Chose student")
        return <StudentDashboard />
    }

    if (decoded.role === 'teacher') {
        return <TeacherDashboard />
    }
}
