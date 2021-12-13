import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


//route imports
import Login from '../Login/Login';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import PublicRoute from '../_routes/PublicRoute';
import PrivateRoute from '../_routes/PrivateRoute';
import useToken from './useToken';
import DashboardSelector from '../_routes/DashboardSelector';
import ClassData from '../Classes/ClassData';


export default function App() {

    const {token, setToken} = useToken()

    console.log(token)
    return (
        <BrowserRouter>
            <Suspense
                fallback={<h1>Loading...</h1>}
            >   
                <Header />
                <Routes path='/'>
                        <Route path='' element={<PublicRoute isAuthenticated={token}/>} />
                        <Route path='login' element={<Login setToken={setToken}/>} />
                        <Route path='dashboard/' element={
                            <PrivateRoute>
                                <DashboardSelector />  
                            </PrivateRoute>
                        }>      
                        <Route path=':className' element={<ClassData />}/>
                        </Route>
                        


                </Routes>
                <Footer />
            </Suspense>
        </BrowserRouter>
    )
    
 
}