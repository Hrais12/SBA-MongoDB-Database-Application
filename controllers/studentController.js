const Student = require("../models/student");


const allStudent = async (req,res)=>{
    const student = await Student.find()

    res.json({student: student})
}



module.exports= {allStudent}