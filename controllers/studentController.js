const Student = require("../models/student");


const allStudent = async (req,res)=>{
    const student = await Student.find()

    res.json({student: student})
}


const getStudent = async (req,res)=>{

    const studentId = req.params.id
    const student = await Student.findById(studentId)

    res.json({student: student})
}

const addStudent= async(req,res)=>{

    const {name,teacher,grade} = req.body
    const student = await Student.create({
        name : name,
        teacher: teacher,
        grade: grade
    })

    res.json({student: student})
}



module.exports= {
    allStudent,
    getStudent,
    addStudent
}