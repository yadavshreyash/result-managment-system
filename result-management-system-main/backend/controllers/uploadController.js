const multer = require("multer");
const xlsx = require("xlsx");
const Marks = require("../models/Marks");

const uploadFile = multer({ dest: "uploads/" });

const uploadMarks = async (req, res) => {
  const file = xlsx.readFile(req.file.path);
  const data = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);

  for (const record of data) {
    const student = await Marks.findOne({ studentId: record.studentId });
    if (student) {
      Object.assign(student, record);
      await student.save();
    } else {
      await Marks.create(record);
    }
  }

  res.status(200).send("Marks uploaded successfully!");
};

module.exports = { uploadMarks, uploadFile };