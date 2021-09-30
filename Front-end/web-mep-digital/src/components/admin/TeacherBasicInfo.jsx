import { Button, TextField } from '@mui/material'
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
        if(props.new){
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
        setName(props.new ? "" : props.name)
        setId(props.new ? "" : props.id)
        setLastName(props.new ? "" : props.lastName)
        setEmail(props.new ? "" : props.email)
        setPassword("")
    }, [props])

    return (
        <div className = 'unit'>
            <p>Información básica del profesor</p>
            <form>
                <Box sx = {{ maxWidth: 300}}>
                    <TextField
                    id = 'teacherId'
                    inputProps = {{min: 0, style: {textAlign: 'center'}}}
                    label = 'Id del profesor'
                    variant = 'outlined'
                    name = 'id'
                    disabled = {!props.new}
                    onChange = {onChangeId}
                    value = {id}/>
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
                    <Button variant="contained" type="submit">
                    Guardar
                    </Button>
                </Box>
            </form>
        </div>
    )
}
