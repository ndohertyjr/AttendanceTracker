import React, { Component } from 'react';
import Header from '../Partials/Header';
import ClassInfo from '../ClassInfo/ClassInfo';


export default function StudentDashboard() {
    greeting = (
        <h1>Welcome, {this.name}!</h1>
    )

    return (
        <div className="container">
            <ClassInfo  name={this.props.name}/>
        </div>
        
    );
}
