const express = require('express');
const bcrypt = require('bcryptjs');  // for password encryption
const Teacher = require('../models/teacher');
const { getValidateStudent, getValidateTeacher } = require('../validation/getValidators');

const router = express.Router();

// PUT Teacher Rating
router.put("/:id/ratings", async (req, res, next) => {
  const teacherId = req.params.id;
  const { studentId, rating } = req.body;
  console.log(`\nRating teacher (${teacherId})...`);

  try {
    const teacher = await getValidateTeacher(teacherId, res);
    if (!teacher) return;

    const student = await getValidateStudent(studentId, res);
    if (!student) return;

    if (rating > 100 || rating < 0) {
      console.log(`Invalid rating (${rating})!`);  // rating has to be in [0, 100]
      return res.status(500).json({ message: "Calificación inválida (debe ser de 0 a 100)!" });
    }
    
    const teacherRating = teacher.ratings.find(ratingObject => ratingObject.student.equals(student._id));
    if (teacherRating) {
      teacher.ratings.id(teacherRating._id).rating = rating;  // update existing rating
    } else {
      teacher.ratings.push({  // push rating
        student: student._id,
        rating: rating
      });
    }
    teacher.save();  // update ratings

    console.log(`Success on rating teacher ${rating} (${teacher.name} ${teacher.lastname})!`);
    return res.status(200).json({ message: "Calificación de profesor exitosa" });

  } catch (error) {
    console.log(error);
    console.log(`Error rating teacher!`);
    return res.status(500).json({ message: "Un error ocurrió calificando el profesor" })
  }
});


// DELETE Teacher Rating
router.delete("/:id/ratings", async (req, res, next) => {
  const teacherId = req.params.id;
  const { studentId } = req.body;
  console.log(`\nDeleting teacher (${teacherId}) rating by student (${studentId})...`);

  try {
    const teacher = await getValidateTeacher(teacherId, res);
    if (!teacher) return;

    const student = await getValidateStudent(studentId, res);
    if (!student) return;
    
    const teacherRating = teacher.ratings.find(ratingObject => ratingObject.student.equals(student._id));
    if (teacherRating) {
      await teacher.ratings.pull(teacherRating._id);  // update existing rating
    } else {
      console.log(`Student rating doesn't exists (${teacherId})!`);
      return res.status(500).json({ message: "Calificación del profesor no existe" })
    }
    teacher.save();  // update ratings

    console.log(`Success deleting teacher rating by student (${student.name} ${student.lastname})!`);
    return res.status(200).json({ message: "Eliminación de calificación de profesor exitosa" });

  } catch (error) {
    console.log(error);
    console.log(`Error deleting teacher rating!`);
    return res.status(500).json({ message: "Un error ocurrió eliminando la calificación del profesor" })
  }
});


// GET Teacher
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(`\nFetching teacher (${id})...`);
  try {
    const teacher = await getValidateTeacher(id, res, true);
    if (!teacher) return;

    console.log(`Success on fetching teacher (${teacher.name} ${teacher.lastname})!`);
    return res.status(200).json({ teacher });

  } catch (error) {
    console.log(error);
    console.log(`Error fetching teacher!`);
    return res.status(500).json({ message: "Un error ocurrió recuperando el profesor" })
  }
});


// DELETE Teacher
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(`\nDeleting teacher (${id})...`);
  try {
    const results = await Teacher.deleteOne({ id: id });

    if (results.deletedCount == 0) {
      console.log(`Teacher doesn't exists (${id})!`);
      return res.status(500).json({ message: "Profesor no existe" })
    } else {
      console.log(`Success on deleting teacher (${id})!`);
      return res.status(201).json({ message: 'Se eliminó el profesor exitosamente' });
    }

  } catch (error) {
    console.log(error);
    console.log(`Error deleting teacher!`);
    return res.status(500).json({ message: "Un error ocurrió eliminando el profesor" })
  }
});


// GET Teachers
router.get("/", async (req, res, next) => {
  console.log(`\nFetching all teachers...`);

  try {
    const teachers = await Teacher.find().populate('ratings.student');

    console.log(`Success on fetching all teachers!`);
    return res.status(200).json({ teachers });

  } catch (error) {
    console.log(error);
    console.log(`Error fetching all teachers!`);
    return res.status(500).json({ message: "Un error ocurrió recuperando todos los profesores" })
  }
});


// POST Teacher
router.post("/", async (req, res, next) => {
  const {id, email, password, name, lastname } = req.body;
  
  if (!id || !email || !password || !name || !lastname) {
    console.log('\nTeacher data field is missing')
    return res.status(500).json({ message: "Falta un campo del profesor" });
  }
  
  console.log(`\nCreating profesor ${name} ${lastname}...`);
  try {
    const idIsRegistered = await Teacher.exists({ id: id });
    if (idIsRegistered) {
      console.log(`Teacher id already registered (${id})!`);
      return res.status(500).json({ message: "Carnet ya está registrado" })
    }

    const emailIsRegistered = await Teacher.exists({ email: email });
    if (emailIsRegistered) {
      console.log(`Teacher email already registered (${email})!`);
      return res.status(500).json({ message: "Correo ya está registrado" })
    }

    const encryptedPassword = await bcrypt.hash(password, 10);  // salt lenght 10 is secure and fast enough
    const teacher = new Teacher({ id, email, password: encryptedPassword, name, lastname });

    await teacher.save();  // call to create teacher
    console.log(`Teacher created successfully (${name} ${lastname})!`);
    return res.status(201).json({ message: 'Se creó el profesor exitosamente' });

  } catch (error) {
    console.log(error);
    console.log(`Failed teacher creation (${name} ${lastname})!`);
    return res.status(500).json({ message: "Un error ocurrió creando el profesor" })
  }
});

module.exports = router;
