import React from 'react'
import AdminMode from '../../components/admin/AdminMode';
import NavTeacher from '../../components/admin/NavAdmin'


export default function AdminCourses() {
    return (
        <div>
            <NavTeacher/>
            <AdminMode mode = {"Courses"}/> 
        </div>
    )
}
