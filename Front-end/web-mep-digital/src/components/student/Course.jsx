import React from 'react'  
import CourseBasicInfo from '../admin/CourseBasicInfo'

export default function Course(props) {
    return (
        <div className = "courseDetail">
            {props.course !== undefined ?
                <CourseBasicInfo name = {props.course.name} id = {props.course.id} grade = {props.course.grade} new = {false}/>
            :
                <CourseBasicInfo name = {""} id = {""} grade = {"default"} new = {true}/>
            }
            
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
            <div className = "unit">Hola soy una unidad de {props.text}</div>
        </div>
    )
}