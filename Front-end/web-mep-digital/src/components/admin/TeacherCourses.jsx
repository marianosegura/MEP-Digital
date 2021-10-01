import React from 'react'

export default function TeacherCourses(props) {
    return (
        <div className = 'unit'>
            <p>Lista de cursos</p>
            {props.courses.length > 0 ? props.courses.map((course) => (
                <div>
                    <p>Id: {course.id}</p> 
                    <p>Nombre: {course.name}</p> 
                </div>
            )): 
                <p>Sin cursos registrados</p>
            }
        </div>
    )
}
