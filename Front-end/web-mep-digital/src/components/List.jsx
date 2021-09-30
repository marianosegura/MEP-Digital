import { Button } from '@mui/material'
import React from 'react'
import ItemCourse from './Item'

export default function List(props) {
    return (
        <div>
            <Button variant="text" className = 'itemButton'>
                <p className = 'textItem'>Nuevo {props.text}</p>
                <p className = 'textItem'>Click aquí</p>
            </Button>
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