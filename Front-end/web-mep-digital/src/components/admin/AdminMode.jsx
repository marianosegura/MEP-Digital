import React from 'react'
import ListCourses from '../ListCourses'
import Course from '../student/Course'

export default function AdminMode(props) {
    return (
        <div>
            <div className = "listCourses"><ListCourses text = {props.mode}/></div>
            <div className = "course"><Course text = {props.mode}/></div>
        </div>
    )
}
