import React, { Component } from 'react';
import ClassDataTable from '../Classes/ClassDataTable';
import './TeacherDashboard.css'
      

class TeacherDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userList: [],
            classList: [],
            DataLoaded: false
        }
    }

    componentDidMount() {
        
        this.getStudentData();
        this.getClassData();
        
    }

    async getStudentData() {
        //fetch student info
        fetch('http://localhost:8080/api/teacherDash', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
        .then(data => data.json())
        .then(data => {

            console.log("TeacherDashboard: Retrieved Class Data")
            if (data) {
                this.setState({userList: data.users, DataLoaded: true})
            }
        })
    }

    async getClassData() {
        //fetch class list
        fetch('http://localhost:8080/api/classList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        })
        .then(data => data.json())
        .then(data => {

            console.log("TeacherDashboard: Retrieved Class Data")
            if (data) {
                this.setState({classList: data, DataLoaded: true})
            }
        })
    }

    


    displayClassTable(listOfClasses, userList) {
        return (
            <div className="tableContainer">
                    <ClassDataTable classListData={listOfClasses} studentListData={userList}/>                  
            </div>

        )
    }

    render() {
        const {DataLoaded, userList, classList} = this.state
        
    
        if (!DataLoaded) {
            return <h1>Loading Dashboard!</h1>
        } else {

            return (
                <div>
                    <div className="teacherViewHead">
                        <h1>Teacher Dashboard</h1>
                    </div>
                    <div className="teacherViewBody">
                        {this.displayClassTable(classList, userList)}
                    </div>     
                </div>
            )
        }
    }
}

export default TeacherDashboard
