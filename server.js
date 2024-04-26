require("dotenv");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = require ('./config/connectToDb.js');

const cors = require("cors");



connectToDb();

app.use(express.json());
app.use(cors());


const Teacher=require("./models/teacher.js");
const Student = require("./models/student");
const Course = require("./models/course");

const teacherController = require("./controllers/teacherController.js");
const studentController = require("./controllers/studentController.js");
const courseController = require("./controllers/courseController.js")

// Teacher CRUD routes
app.get("/teacher", teacherController.allTeacher);
app.get("/teacher/:id", teacherController.getTeacher);
app.post("/teacher", teacherController.addTeacher);
app.put("/teacher/:id", teacherController.updateTeacher)
app.delete("/teacher/:id", teacherController.deleteTeacher);


// Student CRUD routes
app.get("/student", studentController.allStudent);
app.get("/student/:id", studentController.getStudent);
app.post("/student", studentController.addStudent)
app.put("/student/:id", studentController.updateStudent);
app.delete("/student/:id", studentController.deleteStudent);

// course CRUD routes
app. get ("/course", courseController.allCourse);
app. get ("/course/:id", courseController.getCourse);
app.post("/course", courseController.addCourse)
app.put("/course/:id", courseController.updateCourse)
app.delete("/course/:id", courseController.deleteCourse)



app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
  });