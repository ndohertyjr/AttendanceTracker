import React from 'react';

import useToken from '../App/useToken'
import UserData from '../User/UserData';

async function getStudentData() {
    // Login function to validate user info with server 
    // FIXME: Remove log

    console.log("gettingStudentData function running");
    return fetch('http://localhost:8080/studentDash', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        
}



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
            console.log("Data.user: " + data.user.firstName)
            console.log("Data.user: " + data.user)
            if(data) {
                this.setState({
                    user: data.user,
                     DataLoaded: true})
            }
     
    })
}
    

    render() {
        const {DataLoaded} = this.state;

        
        if (!DataLoaded) {
            return <h1>Loading data...</h1>

        } else {
           
        //console.log(JSON.stringify(user))

        return (
            <div className="UserDataContainer">
                <UserData user={this.state.user} />   
            </div>
        )
        }
    };

    

        
    };

export default StudentDashboard


