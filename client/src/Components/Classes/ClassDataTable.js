import React, { Component, useState } from 'react';
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import { Table, Accordion, CardGroup } from 'react-bootstrap';
import ClassData from './ClassData';



function getClassNames(classes) {

    let listOfClasses = []
    for (var i = 0; i < classes.length; i++) {
        if (!JSON.stringify(listOfClasses).includes(classes[i].className)) {
            listOfClasses.push(classes[i].className)
        }  
        console.log("TEST") 
    }

    return listOfClasses;
}


/*CLASS RENDERING TABLE TO SHOW ALL CURRENT CLASSES FOR TEACHER */

export default function ClassDataTable ({classListData, studentListData}) {
    
    const [students, setStudents] = useState(studentListData)
    const [clicked, setClicked] = useState("0")
 
    let location = useLocation();

    const currentClassNames = getClassNames(classListData)

    return (
        

            <div className="accordionDataContainer">
                <h1>Your Classes:</h1>
                <div className="class-Accordion">
            
                        
                    {currentClassNames.map((className, index) => {
        
                            return (<li key={index}>
                                        <Link 
                                            to={`${className}`} 
                                            state={{
                                                className: className,
                                                 classData: classListData,
                                                 studentData: studentListData}}>
                                            {className}
                                        </Link>
                                    </li>                     
                            )
                        })}
                        
                
                </div>
                <Routes>
                    <Route path=':className' element={<ClassData />}/>
                </Routes>
            </div>
        )
    }
