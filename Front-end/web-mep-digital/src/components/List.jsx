import React from 'react'
import ItemCourse from './Item'

export default function List(props) {
    return (
        <div>
            <p>I'm a list of {props.text}</p>
            {props.courses.length > 0 ? props.courses.map((course) => (
                    <ItemCourse 
                        id = {course.id}
                        name = {course.name}
                        key = {course.id}
                        onChange = {props.onChange}
                    />
                )) : <p>Sin cursos</p>}     
        </div>
    )
}