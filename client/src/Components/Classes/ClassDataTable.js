/*
    Functional component to populate the class data for the teacher's dashboard
*/

import React, { Component, useState } from 'react';
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import { Table, Accordion, CardGroup } from 'react-bootstrap';
import ClassData from './ClassData';
import { attendanceCalculator, totalAttendanceAverage } from '../_helpers/Attendance';
import './ClassDataTable.css'


//obtain the names of classes from original JSON data
function getClassNames(classes) {

    let listOfClasses = []
    for (var i = 0; i < classes.length; i++) {
        if (!JSON.stringify(listOfClasses).includes(classes[i].className)) {
            listOfClasses.push(classes[i].className)
        }  
    }

    return listOfClasses;
}

// Use attendance helper to total class attendance averages
function getAttendanceAverage(className, students) {
    let totalAttendanceRates = []
    let studentsInClass = []
    console.log("Class Name" + className)
    console.log(students)

    for (var i in Object.keys(students)) {
        if (className === students[i].classDatum.className) {
            studentsInClass.push(students[i])
            let {classBeginDate, numClassesPerWeek} = students[i].classDatum;
            let { daysAttended } = students[i].attendance;
            totalAttendanceRates.push(attendanceCalculator(classBeginDate, daysAttended, numClassesPerWeek))
        }
    };

    console.log("ClassDataTable:getAttendance Average - Calculating Rates")
    let classAvg = totalAttendanceAverage(totalAttendanceRates)
 

    return classAvg


}


/*FUNCTIONAL COMPONENT FOR RENDERING TABLE TO SHOW ALL CURRENT CLASSES FOR TEACHER */

export default function ClassDataTable ({classListData, studentListData}) {
    
    const currentClassNames = getClassNames(classListData)

    return (
            <div className="classDataContainer">
                <div className="classWrapper">
                    <table className="classesList">
                        <tbody>
                            <tr>
                                <td>
                                    <h3 className="teacherClass">Your Classes:</h3>
                                </td>
                                {currentClassNames.map((className, index) => {
                                    return (
                                        <td key={index}>
                                            <Link 
                                                to={`${className}`} 
                                                state={{
                                                    className: className,
                                                        classData: classListData,
                                                        studentData: studentListData}}>
                                                {className}
                                            </Link>
                                        </td>                     
                                    )
                                })}
                            </tr>
                            <tr className="attendanceAverageList">
                                <td>
                                    <h3 className="attendanceRateTotal">Attendance Totals:</h3>
                                </td>
                                {currentClassNames.map((className, index) => {
                                    return (
                                        <td key={className+index}>    
                                            {`${getAttendanceAverage(className, studentListData)}%`}
                                        </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                
                </div>
                <Routes>
                    <Route path=':className' element={<ClassData />}/>
                </Routes>
            </div>
        )
    }
