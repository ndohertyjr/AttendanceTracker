import React, { Component, useState } from 'react';
import { Table, Accordion } from 'react-bootstrap';
import ClassData from '../_helpers/ClassData';


/*CLASS RENDERING TABLE TO SHOW ALL CURRENT CLASSES FOR TEACHER */

export default function ClassDataTable ({classListData, studentListData}) {
    
    const [students, setStudents] = useState(studentListData)
    const [classList, setClassList] = useState(classListData)
    const [clicked, setClicked] = useState("0")

    

    console.log("Student table: " + JSON.stringify(students))
    
    
    console.log("Class List:" + JSON.stringify(classList))

    const handleClick = (index) => {
        if(clicked === index) {
            <a href="www.google.com" target="_blank" rel="noreferrer noopener"></a>
        }

        setClicked(index)
    }


    return (
        

            <div className="accordionDataContainer">
                <h1>Your Classes:</h1>
                <div className="class-Accordion">
                    <ul>
                        
                    {classList.map((classInfoRow, index) => {
                        {console.log("Testing Map: " + classInfoRow + " " + index)}
                        
                        return <ClassData 
                                onClick={() => handleClick(index)}
                                active={clicked === index}
                                key={index} classListItem={classInfoRow} />
                            
                                                
                    })}   
                     
                   </ul> 
                </div>
            </div>
        )
    }
