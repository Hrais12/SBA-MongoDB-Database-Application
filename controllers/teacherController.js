const Teacher=require("../models/teacher.js");

const allTeacher = async (req,res)=>{
    const teacher = await Teacher.find()

    res.json({teacher: teacher})
}


module.exports= {allTeacher}