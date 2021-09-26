import React from 'react'
import { useLocation } from "react-router-dom";
import ListCourses from '../../components/ListCourses';
import Course from '../../components/student/Course';
import '../../index.css'



export default function Student() {
    const idUser = useLocation().state;
    console.log("Bienvenido " + idUser)

    return (
        <div className = "studenScreen">
            <div className = "listCourses"><ListCourses/></div>
            <div className = "course"><Course/></div>
        </div>
    )
}

