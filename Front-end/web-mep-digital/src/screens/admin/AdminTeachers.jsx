import React from 'react'
import AdminMode from '../../components/admin/AdminMode'
import NavAdmin from '../../components/admin/NavAdmin'

export default function AdminTeachers() {
    return (
        <div>
            <NavAdmin/>
            <AdminMode mode = {"Teacher"}/> 
        </div>
    )
}
