const Marks = require("../models/Marks");

const getStudentResults = async (req, res) => {
  const { studentId } = req.params;
  const student = await Marks.findOne({ studentId });

  if (!student) {
    return res.status(404).send("Student not found");
  }

  const totalMarks = Object.values(student.toObject())
    .filter((value) => typeof value === "number")
    .reduce((acc, mark) => acc + mark, 0);

  res.status(200).json({ ...student.toObject(), totalMarks });
};

module.exports = { getStudentResults };