/*
    Format User Data
*/
import attendanceCalculator from "../_helpers/Attendance";

export default function User ({user}) {
    //destructure objects

    
    const { username, user_id, firstName, lastName, section, classDatum, attendance } = user;
    const { className, classBeginDate, numClassesPerWeek } = classDatum;
    const { daysAttended, lastAttendanceCheckin } = attendance;
    console.log(user.classDatum)
    console.log("DATE CHECK")
    console.log(classBeginDate, daysAttended, numClassesPerWeek)
    return (
        <tbody>
            <tr>
                <td>{user_id}</td>
                <td>{lastName}, {firstName}</td>
                <td>{classDatum.className}</td>
                <td>{section}</td>
                <td>{`${attendanceCalculator(classBeginDate, daysAttended, numClassesPerWeek)}%`}</td>
            </tr>
        </tbody>
        )   
                
    }