import React from "react";
import { useParams } from "react-router-dom";





const ClassData = ({ classListItem, active, onToggle }) => {

    console.log("TESTING CLASS DATA")
    const { className, section, classBeginDate } = classListItem;
    const { classParam } = useParams();
    console.log("testing classdata" + classListItem)
    return (
        <li className={`accordionListItem ${active ? "active" : ""}`}>
            <a style={{display: "table-cell"}} href={`/classInfo/${className}`} target="_blank"
                rel = "noopener noreferrer">${className}</a>

        </li>

    )
}
export default ClassData;

