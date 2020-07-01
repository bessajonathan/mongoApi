const express = require("express");
const router = express.Router();
const studentController = require("./controllers/studentController");

router.get("/student", studentController.getStudent);
router.get("/student/:id", studentController.getStudentById);
router.delete("/student/:id", studentController.deleteStudent);
router.put("/student/:id", studentController.updateStudent);
router.post("/student", studentController.createStudent);

module.exports = router;