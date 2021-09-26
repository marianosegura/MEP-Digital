import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../screens/Login'
import Student from '../screens/Student'
import Teacher from '../screens/Teacher'
import AdminCourses from '../screens/admin/AdminCourses'
import AdminStudents from '../screens/admin/AdminStudents'
import AdminTeachers from '../screens/admin/AdminTeachers'

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
                    exact path = "/admin/courses"
                    component = {AdminCourses}
                />
                <Route 
                    exact path = "/admin/students"
                    component = {AdminStudents}
                />
                <Route 
                    exact path = "/admin/teachers"
                    component = {AdminTeachers}
                /> 
            </Router>
        )
    }
}
