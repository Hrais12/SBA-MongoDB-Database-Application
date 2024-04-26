const Course = require("../models/course");


const allCourse = async(req,res)=>{
    const course = await Course.find()

    res.json({course: course})
}


const getCourse = async(req,res)=>{

    const courseId = req.params.id
    const course = await Course.findById(courseId)

    res.json({course: course})
}



module.exports = {
    allCourse,
    getCourse
}