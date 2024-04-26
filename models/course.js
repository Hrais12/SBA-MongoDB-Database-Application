const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    name: String,
    teacher: String,
    room: Number
})

const Course = mongoose.model('course',courseSchema)

module.exports = Course