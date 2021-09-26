import React from 'react'
import { Link } from "react-router-dom";

export default function NavAdmin(props) {
    return (
        <div className = "navAdmin">
            <Link to = "/admin/courses">Cursos</Link>
            <Link to = "/admin/teachers">Profesores</Link>
            <Link to = "/admin/students">Estudiantes</Link>
        </div>
    )
}
