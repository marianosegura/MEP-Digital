import React from 'react'
import TeacherBasicInfo from './TeacherBasicInfo'
import TeacherCourses from './TeacherCourses'

export default function Teacher(props) {

    return (
        <div >
        {props.teacher !== undefined ?
        <div className = "courseDetail">
            <TeacherBasicInfo 
            name = {props.teacher.name} 
            id = {props.teacher.id} 
            lastName = {props.teacher.lastname}
            email = {props.teacher.email}  
            new = {false}/>
            <TeacherCourses courses = {props.courses}/> 
            <div className = "unit">Hola soy una unidad de {props.text}</div>
        <div className = "unit">Hola soy una unidad de {props.text}</div>
        <div className = "unit">Hola soy una unidad de {props.text}</div>
        <div className = "unit">Hola soy una unidad de {props.text}</div>
        <div className = "unit">Hola soy una unidad de {props.text}</div>
        <div className = "unit">Hola soy una unidad de {props.text}</div>
        <div className = "unit">Hola soy una unidad de {props.text}</div>
            
        </div>    
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
    </div>
    )
}
