import React from 'react';
import UserData from '../User/UserData';

//Student Dashboard component to handle getting the student data and returning json object for formatting

class StudentDashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            role: '',
            section: '',
            className: '',
            DataLoaded: false
        };
    
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/studentDash', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
        .then( async response => {
            const data = await response.json();
            if(data) {
                this.setState({
                    user: data.user,
                     DataLoaded: true})
            } else {
                console.log("StudentDashboard component did not mount correctly")
            }
     
    })
}
    

    render() {
        const {DataLoaded} = this.state;

        if (!DataLoaded) {
            return <h1>Loading data...</h1>

        } else {
            return (
                <div className="UserDataContainer">
                    <UserData user={this.state.user} />   
                </div>
            )
        }
    };
};

export default StudentDashboard


