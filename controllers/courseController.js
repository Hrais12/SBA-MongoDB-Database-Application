const Course = require("../models/course");


const allCourse = async(req,res)=>{
    const course = await Course.find()

    res.json({course: course})
}


module.exports = {allCourse}