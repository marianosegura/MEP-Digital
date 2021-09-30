import { Button, Paper } from '@mui/material'
import React from 'react'
import ItemCourse from './Item'

export default function List(props) {
    return (
        <div>
        <Paper style={{maxHeight: 800, overflow: 'auto'}}>
            <Button 
            variant="text" 
            className = 'itemButton'
            //onChange= {props.onChange(undefined)}
            >
                <p className = 'textItem'>Nuevo {props.text}</p>
                <p className = 'textItem'>Click aquí</p>
            </Button>
                {props.items.length > 0 ? props.items.map((course) => (
                    <ItemCourse 
                    id = {course.id}
                    name = {course.name}
                    key = {course.id}
                    onChange = {props.onChange}/>
                    )) : <p>Sin cursos</p>} 
        </Paper>
                
        </div>
    )
}