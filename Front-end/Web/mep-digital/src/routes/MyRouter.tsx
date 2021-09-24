import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//Screens
import Admin from '../screens/admin/Admin'
import Login from '../screens/Login'
import Student from '../screens/student/Student'
import Teacher from '../screens/teacher/Teacher'

export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <Route 
                    exact path = "/" 
                    component = {Login}
                />
                <Route 
                    exact path = "/teacher" 
                    component = {Teacher}
                />
                <Route 
                    exact path = "/student" 
                    component = {Student}
                />
                <Route 
                    exact path = "/admin" 
                    component = {Admin}
                />
            </Router>
        )
    }
}
