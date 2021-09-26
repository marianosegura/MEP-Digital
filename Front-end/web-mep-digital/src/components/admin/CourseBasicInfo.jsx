import React from 'react'

export default function CourseBasicInfo(props) {
    return (
        <div className = "unit">
            <p>Información básica del curso</p>
            <form> 
                <input type = "text" placeholder = "Nombre" value = {props.name}/>
                <br/>
                <input type = "text" placeholder = "Id del curso" value = {props.id}/> 
                <br/>
                <select value = {props.grade}>
                        <option value = "default" disabled hidden>Selecciona el grado</option>
                        <option value = "1">Primer año</option>
                        <option value = "2">Segundo año</option>
                        <option value = "3">Tercer año</option>
                        <option value = "4">Cuarto año</option>
                        <option value = "5">Quinto año</option>
                        <option value = "6">Sexto año</option>
                    </select>
                <br/>
                <input type = "submit" value = "Guardar"/> 
            </form>
        </div>
    )
}
