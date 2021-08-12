const Teacher = require('../models/teacher');
const Student = require('../models/student');

exports.getValidateTeacher = async (teacherId, res) => {
  const teacher = await Teacher.findOne({ id: teacherId });
  if (!teacher) {
    console.log(`Teacher doesn't exists (${teacherId})!`);
    res.status(500).json({ message: "Profesor no existe" });
  } 
  return teacher;
};

exports.getValidateStudent = async (studentId, res) => {
  const student = await Student.findOne({ id: student });
  if (!student) {
    console.log(`Student doesn't exists (${studnetId})!`);
    res.status(500).json({ message: "Estudiante no existe" });
  } 
  return student;
};


