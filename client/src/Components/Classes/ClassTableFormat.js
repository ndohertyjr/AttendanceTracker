import './ClassTableFormat.css'

/*
    Formats the headers for the data utilized by ClassData component
*/

const ClassTableHeaders = () => {
    return (
        <thead className='teacherHeadData'>
            <tr>
                <th>User ID:</th>
                <th>Name:</th>
                <th>Class Name:</th>
                <th>Section:</th>
                <th>Attendance Percentage:</th>
            </tr>
        </thead>
    )
}

export default ClassTableHeaders;