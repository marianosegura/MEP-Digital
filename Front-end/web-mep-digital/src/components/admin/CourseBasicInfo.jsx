import { TextField, 
    Box, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem,
    Button
} from '@mui/material'
import { useState, useEffect } from 'react'
import React from 'react'

export default function CourseBasicInfo(props) {
    let [name, setName] = useState(props.name)
    let [id, setId] = useState(props.id)
    let [grade, setGrade] = useState(props.grade)
    
    function onChangeName(e) {
        setName(e.target.value) 
    }
    function onChangeId(e) {
        setId(e.target.value)
    }
    function onChangeGrade(e) {
        setGrade(e.target.value)
    }

    useEffect(() => {
        setName(props.new ? "" : props.name)
        setId(props.new ? "" : props.id)
        setGrade(props.new ? "default" : props.grade)
    },[props])

    return (
      <div className="unit">
        <p>Información básica del curso</p>
        <form>
          <Box sx={{ maxWidth: 300 }}>
          <TextField
              id="outlined-basic"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              label="Id del curso"
              variant="outlined"
              name="id"
              disabled = {!props.new}
              onChange={onChangeId}
              value={id}
            />
            <br/><br/>
            <TextField
              id="courseName"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              label="Nombre del curso"
              variant="outlined"
              name="name"
              onChange={onChangeName}
              value={name}
            />
            <br/><br/>
            <FormControl fullWidth>
              <InputLabel id="select-grade-label">
                Selecciona el grado
              </InputLabel>
              <Select
                labelId="select-grade-label"
                id="grade-select"
                value={grade}
                label="Selecciona el grado"
                onChange={onChangeGrade}
              >
                <MenuItem value={"default"} disabled>Selecciona</MenuItem>
                <MenuItem value={"1"}>Primer año</MenuItem>
                <MenuItem value={"2"}>Segundo año</MenuItem>
                <MenuItem value={"3"}>Tercer año</MenuItem>
                <MenuItem value={"4"}>Cuarto año</MenuItem>
                <MenuItem value={"5"}>Quinto año</MenuItem>
                <MenuItem value={"6"}>Sexto año</MenuItem>
              </Select>
            </FormControl>
            <br/><br/>
            <Button variant="contained" type="submit">
              Guardar
            </Button>
          </Box>
        </form>
      </div>
    );
}
