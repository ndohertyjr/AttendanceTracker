import React from "react";
import { useParams, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import UserData from "../User/UserData";
import User from "../User/User";
import ClassTableHeaders from "./ClassTableFormat";
import './ClassData.css'




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
                <button type="button" onClick={() => navigate('/dashboard')}>Clear Class Data</button>
            </div>
            <div className="sectionsWrapper">
                <table className="teacherClassesTable">
                    <tbody>
                        {currentSections.map((classSection, i) => {
                                return (
                                    <tr key={i}>
                                        <tr id={`${i+" tableHeaders"}`}> 
                                            <td id={"teacherTableHeaders"}>{i === 0 ? <ClassTableHeaders /> : ""} </td>
                                        </tr>
                                
                                        <tr id={`${i+" tableBody"}`} className='teacherClassUserInfo'>
                                            {studentData.map(student => {
                                                if (student.section === classSection) {
                                                    return <User user={student} />
                                                }
                                            })} 
                                        </tr>  
                                    </tr>
                                                            
                                )
                            })}
                    </tbody>
                </table>
            </div>

             
        </div>
    )
}
export default ClassData;

