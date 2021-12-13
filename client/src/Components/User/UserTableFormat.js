import './UserTableFormat.css'

// Formats the data for the UserTable Headers

const UserTableHeaders = () => {
    return (
        <thead className="userTableHeads">
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

export default UserTableHeaders;