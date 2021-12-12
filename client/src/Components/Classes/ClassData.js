import React from "react";
import { useParams, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import UserData from "../User/UserData";
import User from "../User/User";
import UserTableHeaders from "../User/UserTableFormat";




const getClassSections = (className, classData) => {

    let tempClassSection = []
    for (var i = 0; i < classData.length; i++) {
        if (classData[i].className === className) {
            tempClassSection.push(classData[i].section)
        }
    }

    tempClassSection.sort();
    return tempClassSection;
}


const ClassData = () => {

    
    const location = useLocation()
    const { className, classData, studentData } = location.state

    const navigate = useNavigate()
    const currentSections = getClassSections(className, classData);

    
    return (
        <div className='classDataWrapper'>
            <Outlet />
            <div className="backButton">
                <button type="button" onClick={() => navigate(-1)}>Back</button>
            </div>
            <h2>{className}</h2>
            <div className="sectionsWrapper">
                <ul>
                    <table>
                    
                    {currentSections.map((classSection, i) => {
                            
                            return (
                                <tr>
                                    <tr key={i}>
                                       <td>Section: {classSection}</td>
                                       <td>{i === 0 ? <UserTableHeaders /> : ""} </td>
                                    </tr>
                                    <tr>
                                    
                                    </tr>
                                        
                                        
                                        
                                        {studentData.map(student => {
                                            if (student.section === classSection) {
                                                console.log(student)
                                                return <User user={student} />
                                            }
                                        })} 
                                </tr>
                                                        
                            )
                        })}
                    </table>
                </ul>
            </div>

             
        </div>
    )
}
export default ClassData;

