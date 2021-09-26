import React from 'react'
import List from '../List'
import Course from '../student/Course'

export default function AdminMode(props) {
    return (
        <div>
            <div className = "listCourses"><List text = {props.mode}/></div>
            <div className = "course"><Course text = {props.mode}/></div>
        </div>
    )
}
