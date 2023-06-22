//import the model
const Employee = require("../models/Employee");

//define route handler
exports.getEmps = async(req,res) => {
    try {
            //fetch all Employees from database
            const emps = await Employee.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:emps,
                message:"All Employees Data is fetched",
            });
    }
    catch(err) {
        console.error(err); 
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}