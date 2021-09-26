import React from 'react'
import ListCourses from '../components/ListCourses'
import Course from '../components/student/Course'
import '../index.css'

export default function Student() {
    return (
        <div className = "studenScreen">
            <div className = "listCourses"><ListCourses text = {"courses"}/></div>
            <div className = "course"><Course/></div>
        </div>
    )
}
