import './ClassTableFormat.css'

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