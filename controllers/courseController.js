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

const addCourse = async(req,res)=>{

    const {name,teacher,room} = req.body
    const course = await Course.create({
        name : name,
        teacher: teacher,
        room: room
    })

    res.json({course: course})
}


const updateCourse = async(req,res)=>{

    const courseId = req.params.id

    const {name,teacher,room} = req.body
    const course = await Course.findByIdAndUpdate(courseId,{
        name : name,
        teacher: teacher,
        room: room
    })

    res.json({course: course})
}




module.exports = {
    allCourse,
    getCourse,
    addCourse,
    updateCourse
}