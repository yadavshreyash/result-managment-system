const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  attendanceMarks: { type: Number, default: 0 },
  projectReviewMarks: { type: Number, default: 0 },
  assessmentMarks: { type: Number, default: 0 },
  projectSubmissionMarks: { type: Number, default: 0 },
  linkedinPostMarks: { type: Number, default: 0 },
});

module.exports = mongoose.model("Marks", MarksSchema);