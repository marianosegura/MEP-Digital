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
                    render = {(() => {return <Login/>})} 
                />
                <Route 
                    exact path = "/teacher" 
                    render = {(() => {return <Teacher/>})} 
                />
                <Route 
                    exact path = "/student" 
                    render = {(() => {return <Student/>})} 
                />
                <Route 
                    exact path = "/admin" 
                    render = {(() => {return <Admin/>})} 
                />
            </Router>
        )
    }
}
