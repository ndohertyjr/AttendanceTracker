import React, { Component } from 'react';
import Header from '../Partials/Header';
import ClassInfo from '../ClassInfo/ClassInfo';


export default class StudentDashboard extends Component {
    //FIX the constructor
    constuctor(props) {
        this.name = 'Neil Doherty';
        this.className = 'Computer Science';
        this.section = "CS-4556-A"
        this.attendanceRate = 45;
    }

    greeting = (
        <h1>Welcome, {this.name}!</h1>
    )

  

            
     

    render() {
        return (
            <div className="container">
                <ClassInfo  name={this.props.name}/>
            </div>
            
        );
    }; 
}
