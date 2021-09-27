import { Button} from '@mui/material';
import React from 'react'
import { Link, useHistory } from "react-router-dom";

export default function NavAdmin(props) {
    let history = useHistory();

    function goCourses(e) {
        e.preventDefault();
        history.push("/admin/courses");
    }
    function goTeachers(e) {
        e.preventDefault();
        history.push("/admin/teachers");
    }
    function goStudents(e) {
        e.preventDefault();
        history.push("/admin/students");
    }

    return (
        <div className = "navAdmin">
        <Link to = '/admin/courses'>
            <Button label = 'Cursos' onClick = {goCourses}>Cursos</Button>
        </Link>
        <Link to = '/admin/teachers'>
            <Button label = 'Cursos' onClick = {goTeachers}>Profesores</Button>
        </Link>
        <Link to = '/admin/students'>
            <Button label = 'Cursos' onClick = {goStudents}>Estudiantes</Button>
        </Link>
        </div>
    )
}
