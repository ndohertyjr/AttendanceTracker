import React, { Component } from 'react';
import StudentDashboard from '../StudentDashboard/StudentDashboard';

//Persistent Header
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "Neil"
        }
        this.headerType = props.headerType;
        this.name = props.name;
    };

    updateState() {
        this.setState({user: "Test" })
    }

    render() {
        return (
            <header className="header">
                
            </header>
        );
    };
    
}

