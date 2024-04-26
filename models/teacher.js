const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name: String,
    subject: String,
    room: Number

})

const Teacher = mongoose.model('teacher',teacherSchema)

module.exports = Teacher