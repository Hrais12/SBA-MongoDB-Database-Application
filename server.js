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
const Course = require("./models/course")

app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
  });