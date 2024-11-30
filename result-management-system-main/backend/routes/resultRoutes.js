const express = require("express");
const { getStudentResults } = require("../controllers/resultController");

const router = express.Router();

router.get("/:studentId", getStudentResults);

module.exports = router;