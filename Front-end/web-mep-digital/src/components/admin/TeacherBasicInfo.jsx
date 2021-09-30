import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState, useEffect } from 'react'

export default function TeacherBasicInfo(props) {
    const [name, setName] = useState(props.name)
    const [id, setId] = useState(props.id)
    const [lastName, setLastName] = useState(props.lastName)
    const [email, setEmail] = useState(props.email)
    const [password, setPassword] = useState("")

    function onChangeName(e) {
        setName(e.target.value)
    }
    function onChangeId(e) {
        if(props.isNew){
            setId(e.target.value)
        } else {
            console.log("Cant edit keys values like id")
        }
    }
    function onChangeLastName(e) {
        setLastName(e.target.value)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
    useEffect(() => {
        setName(props.isNew ? "" : props.name)
        setId(props.isNew ? "" : props.id)
        setLastName(props.isNew ? "" : props.lastName)
        setEmail(props.isNew ? "" : props.email)
        setPassword(props.isNew ? "" : props.password)
    }, [props])
    return (
        <div className = 'unit'>
            <p>Información básica del profesor</p>
            <form>
                <Box sx = {{ maxWidth: 300}}>
                    <TextField
                    id = 'teacherid'
                    inputProps = {{min: 0, style: {textAlign: 'center'}}}
                    label = 'Id del profesor'
                    variant = 'outlined'
                    name = 'id'
                    disabled = {!props.isNew}
                    onChange = {onChangeId}
                    value = {name}/>
                    <br/><br/>
                    <TextField
                    id = 'teacherName'
                    inputProps = {{min: 0, style: {textAlign: 'center'}}}
                    label = 'Nombre del profesor'
                    variant = 'outlined'
                    name = 'name'
                    onChange = {onChangeName}
                    value = {name}/>
                    <br/><br/>
                    <TextField
                    id = 'teacherLastName'
                    inputProps = {{min: 0, style: {textAlign: 'center'}}}
                    label = 'Apellidos del profesor'
                    variant = 'outlined'
                    name = 'lastName'
                    onChange = {onChangeLastName}
                    value = {lastName}/>
                    <br/><br/>
                    <TextField
                    id = 'teacherEmail'
                    inputProps = {{min: 0, style: {textAlign: 'center'}}}
                    label = 'Email'
                    variant = 'outlined'
                    name = 'email'
                    onChange = {onChangeEmail}
                    value = {email}/>
                    <br/><br/>
                    <TextField
                    id = 'teacherPassword'
                    inputProps = {{min: 0, style: {textAlign: 'center'}}}
                    label = 'Contraseña'
                    variant = 'outlined'
                    name = 'password'
                    onChange = {onChangePassword}
                    value = {password}/>
                    <br/><br/>
                    <br/><br/>
                    <Button variant="contained" type="submit">
                    Guardar
                    </Button>
                </Box>
            </form>
        </div>
    )
}
