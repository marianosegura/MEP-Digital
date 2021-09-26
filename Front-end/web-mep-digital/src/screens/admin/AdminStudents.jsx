import React from 'react'
import AdminMode from '../../components/admin/AdminMode'
import NavAdmin from '../../components/admin/NavAdmin'

export default function AdminStudents() {
    return (
        <div>
            <NavAdmin/>
            <AdminMode mode = {"Students"}/> 
        </div>
    )
}
