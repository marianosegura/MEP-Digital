import React, { useState, useEffect } from 'react'
import NavTeacher from '../../components/admin/NavAdmin'
import List from '../../components/List'
import Course from '../../components/admin/Course'


export default function AdminCourses() {

    const [courses, setCourses] = useState([])
    const [courseId, setCourseId] = useState("")

    function handleChange(idCourse) {
        setCourseId(idCourse)
    }

    function getCourseInfo(){
        return courses.find(course => course.id === courseId)
    }

    const  getCourses = async () => {
        var myInit = { 
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        var url = new URL('https://serene-sands-78874.herokuapp.com/api/courses')
        var myRequest = new Request(url, myInit); 
        await fetch(myRequest).then( response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
            })
            .then( json => {
            setCourses(json.courses)
            if(courses > 0){
                setCourseId(courses[0].id)
            }
        }).catch(err => {
            err.json().then(errorMessage => {
                alert(errorMessage.message)
            })
        })
    }
    
    useEffect(() => {
        getCourses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    return (
        <div>
            <NavTeacher/>
            <div className = "listCourses">
                <List text = {"Curso"} 
                courses = {courses} 
                onChange = {handleChange}/>
            </div>
            <div className = "course">
                <Course text = {courseId} 
                course = {getCourseInfo()}/>
            </div>
        </div>
    )
}
