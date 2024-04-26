const Teacher=require("../models/teacher.js");

const allTeacher = async (req,res)=>{
    const teacher = await Teacher.find()

    res.json({teacher: teacher})
}

const getTeacher = async (req,res)=>{

    const teacherId = req.params.id
    const teacher = await Teacher.findById(teacherId)

    res.json({teacher: teacher})
}

const addTeacher = async(req,res)=>{

    const {name,subject,room} = req.body
    const teacher = await Course.create({
        name : name,
        subject: subject,
        room: room
    })

    res.json({teacher: teacher})
}

module.exports= {
    allTeacher,
    getTeacher,
    addTeacher
}