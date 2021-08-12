const Teacher = require('../models/teacher');
const Student = require('../models/student');

// Get validators get the database document and log if it 
// doesn't exists to the console and html response.


exports.getValidateTeacher = async (teacherId, res, populateRatings = false) => {
  const teacher = (populateRatings) 
    ? await Teacher.findOne({ id: teacherId }).populate('ratings.student')
    : await Teacher.findOne({ id: teacherId });

  if (!teacher) {
    console.log(`Teacher doesn't exists (${teacherId})!`);
    res.status(500).json({ message: "Profesor no existe" });
  } 
  return teacher;
};


exports.getValidateStudent = async (studentId, res) => {
  const student = await Student.findOne({ id: studentId });
  if (!student) {
    console.log(`Student doesn't exists (${studentId})!`);
    res.status(500).json({ message: "Estudiante no existe" });
  } 
  return student;
};


