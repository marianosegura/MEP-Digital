import React from 'react'
import TeacherBasicInfo from './TeacherBasicInfo'

export default function Teacher(props) {
    return (
        <div className = "courseDetail">
        {props.course !== undefined ?
            <TeacherBasicInfo 
            name = {props.teacher.name} 
            id = {props.teacher.id} 
            lastName = {props.teacher.lastName}
            email = {props.teacher.email}  
            isNew = {false}/>
        :
            <TeacherBasicInfo 
            name = {""} 
            id = {""} 
            lastName = {""}
            email = {""}  
            isNew = {true}/>
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
