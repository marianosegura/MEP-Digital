import React , { useState, useEffect } from 'react'
import Course from '../components/student/Course'
import {  useLocation } from "react-router-dom";
import '../index.css'
import List from '../components/List';

export default function Student() {

    const [courses, setCourses] = useState([])

    const location = useLocation();

    const  getCourses = async () => {
        var data = {
            'studentId': location.state
        };

        var myInit = { 
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        var url = new URL('https://serene-sands-78874.herokuapp.com/api/courses')
        url.search = new URLSearchParams(data).toString();
        var myRequest = new Request(url, myInit); 
        await fetch(myRequest).then( response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
            })
            .then( json => {
            setCourses(json)
            console.log(json)
        }).catch(err => {
            err.json().then(errorMessage => {
                alert(errorMessage.message)
            })
        })
    }
    

    useEffect(() => {
        getCourses()
      },[]);

    return (
        <div className = "studenScreen">
            <div className = "listCourses"><List text = {"courses"} courses = {courses}/></div>
            <div className = "course"><Course/></div>
        </div>
    )
}
