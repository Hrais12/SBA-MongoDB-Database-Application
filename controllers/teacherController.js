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
    const teacher = await Teacher.create({
        name : name,
        subject: subject,
        room: room
    })

    res.json({teacher: teacher})
}

const updateTeacher = async(req,res)=>{

    const teacherId = req.params.id

    const {name,subject,room} = req.body
    const teacher = await Teacher.findByIdandUpdate(teacherId,{
        name : name,
        subject: subject,
        room: room
    },{new:true})

    res.json({teacher: teacher})
}

const deleteTeacher = async (req,res)=>{

    const teacherId = req.params.id
    await Teacher.findByIdAndDelete(teacherId)

    res.json({success: "Teacher record has been deleted successfully"})
}

module.exports= {
    allTeacher,
    getTeacher,
    addTeacher,
    updateTeacher,
    deleteTeacher
}