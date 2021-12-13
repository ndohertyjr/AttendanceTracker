import { useState } from 'react'
import { Route, Navigate, useLocation } from "react-router-dom";
import useToken from "../App/useToken";
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import DashboardSelector from './DashboardSelector';

/*  
    Function to allow authenticated users to access links
*/



export default function PrivateRoute () {

    const token = sessionStorage.getItem('token');
    
    if (!token) {
        return <Navigate to='/login'/>
    }

    if (token) {
        
        return <DashboardSelector token={token}/>
    }

}