const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    grade: Number

})

const Student= mongoose.model('student',studentSchema)

module.exports = Student