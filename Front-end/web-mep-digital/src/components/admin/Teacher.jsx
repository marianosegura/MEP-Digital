import React from 'react'
import TeacherBasicInfo from './TeacherBasicInfo'

export default function Teacher(props) {
    return (
        <div className = "courseDetail">
        {props.teacher !== undefined ?
            <TeacherBasicInfo 
            name = {props.teacher.name} 
            id = {props.teacher.id} 
            lastName = {props.teacher.lastname}
            email = {props.teacher.email}  
            new = {false}/>
        :
            <TeacherBasicInfo 
            name = {""} 
            id = {""} 
            lastName = {""}
            email = {""}  
            new = {true}/>
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
