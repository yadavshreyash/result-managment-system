const express = require("express");
const { uploadFile, uploadMarks } = require("../controllers/uploadController");

const router = express.Router();

router.post("/marks", uploadFile.single("file"), uploadMarks);

module.exports = router;