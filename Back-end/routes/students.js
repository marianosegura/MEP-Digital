const express = require('express');
const bcrypt = require('bcryptjs');  // for password encryption
const Student = require('../models/student');

const router = express.Router();

// GET Student
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(`\nFetching student (${id})...`);
  try {
    const student = await Student.findOne({ id: id });

    if (student == null) {
      console.log(`Student doesn't exists (${id})!`);
      return res.status(500).json({ message: "Estudiante no existe" })
    }

    console.log(`Success on fetching student (${student.name} ${student.lastname})!`);
    return res.status(200).json({ student });

  } catch (error) {
    console.log(error);
    console.log(`Error fetching student!`);
    return res.status(500).json({ message: "Un error ocurrió recuperando los estudiantes" })
  }
});


// DELETE Student
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(`\nDeleting student (${id})...`);
  try {
    const results = await Student.deleteOne({ id: id });

    if (results.deletedCount == 0) {
      console.log(`Student doesn't exists (${id})!`);
      return res.status(500).json({ message: "Estudiante no existe" })
    } else {
      console.log(`Success on deleting student (${id})!`);
      return res.status(201).json({ message: 'Se eliminó el estudiante exitosamente' });
    }

  } catch (error) {
    console.log(error);
    console.log(`Error deleting student!`);
    return res.status(500).json({ message: "Un error ocurrió eliminando los estudiantes" })
  }
});


// UPDATE Student
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { email, password, name, lastname, grade } = req.body;
  console.log(`\nUpdating student (${id}, ${name} ${lastname})...`);

  if (!id || !email || !password || !name || !lastname || !grade) {
    console.log('\nStudent data field is missing')
    return res.status(500).json({ message: "Falta un campo del estudiante" });
  }

  try {
    const emailIsInUse = await Student.exists({ id: { $ne: id }, email: email });
    if (emailIsInUse) {
      console.log(`Email already in use (${email})!`);
      return res.status(500).json({ message: "Correo ya está en uso" })
    }
    const gradeIsInvalid = grade < 1 || grade > 6;  // primary school is range [1, 6]
    if (gradeIsInvalid) {
      console.log(`Student grade is invalid (${grade})!`);
      return res.status(500).json({ message: "Grado inválido" })
    }
    
    const encryptedPassword = await bcrypt.hash(password, 10); 
    const student = await Student.findOne({ id: id });
    if (student == null) {
      console.log(`Student doesn't exists (${id})!`);
      return res.status(500).json({ message: "Estudiante no existe" })
    } 

    student.email = email;
    student.password = encryptedPassword;
    student.name = name;
    student.lastname = lastname;
    student.grade = grade;
    await student.save();  // update document
    console.log(`Student updated successfuly (${name} ${lastname})!`);
    return res.status(201).json({ message: 'Se actualizó el estudiante exitosamente' });

  } catch (error) {
    console.log(error);
    console.log(`Error updating student!`);
    return res.status(500).json({ message: "Un error ocurrió actualizando los estudiantes" })
  }
});


// GET Students
router.get("/", async (req, res, next) => {
  console.log(`\nFetching all students...`);

  try {
    const students = await Student.find();
    console.log(`Success on fetching all students!`);
    return res.status(200).json({ students });

  } catch (error) {
    console.log(error);
    console.log(`Error fetching all students!`);
    return res.status(500).json({ message: "Un error ocurrió recuperando todos los estudiantes" })
  }
});


// POST Student
router.post("/", async (req, res, next) => {
  const {id, email, password, name, lastname, grade } = req.body;
  
  if (!id || !email || !password || !name || !lastname || !grade) {
    console.log('\nStudent data field is missing')
    return res.status(500).json({ message: "Falta un campo del estudiante" });
  }
  
  console.log(`\nCreating student ${name} ${lastname}...`);
  try {
    const idIsRegistered = await Student.exists({ id: id });
    if (idIsRegistered) {
      console.log(`Student id already registered (${id})!`);
      return res.status(500).json({ message: "Carnet ya está registrado" })
    }

    const emailIsRegistered = await Student.exists({ email: email });
    if (emailIsRegistered) {
      console.log(`Student email already registered (${email})!`);
      return res.status(500).json({ message: "Correo ya está registrado" })
    }

    const gradeIsInvalid = grade < 1 || grade > 6;  // primary school is range [1, 6]
    if (gradeIsInvalid) {
      console.log(`Student grade is invalid (${grade})!`);
      return res.status(500).json({ message: "Grado inválido" })
    }

    const encryptedPassword = await bcrypt.hash(password, 10);  // salt lenght 10 is secure and fast enough
    const student = new Student({ id, email, password: encryptedPassword, name, lastname, grade });

    await student.save();  // call to create student
    console.log(`Student created successfuly (${name} ${lastname})!`);
    return res.status(201).json({ message: 'Se creó el estudiante exitosamente' });

  } catch (error) {
    console.log(error);
    console.log(`Failed student creation (${name} ${lastname})!`);
    return res.status(500).json({ message: "Un error ocurrió creando el estudiante" })
  }
});


module.exports = router;
