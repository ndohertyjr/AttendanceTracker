import React, { Component } from 'react';
import ClassDataTable from './ClassDataTable';


const listOfClasses = [{section: '12345', className: 'The Test Class', classBeginDate: "2021-01-01"},
                            {section: '54984', className: 'The Art of Testing', classBeginDate: "2021-01-01"}] 

        

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
        

        // Get names of classes
        for (var i = 0; i < classList.length; i++) {
            if (!JSON.stringify(listOfClasses).includes(classList[i].className)) {
                listOfClasses.push(classList[i])
            }   
        }
    


    
        if (!DataLoaded) {
            return <h1>Loading Dashboard!</h1>
        }

        return (
            <div className="teacherViewContainer">
                <div className="teacherViewHead">
                    <h1>Teacher Dashboard</h1>
                </div>
                <div className="teacherViewBody">
                    {this.displayClassTable(listOfClasses, userList)}
                </div>     
            </div>
        )
    }
}

export default TeacherDashboard
