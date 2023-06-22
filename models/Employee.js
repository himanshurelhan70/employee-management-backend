const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
        },
        departments: {
            type:String,
            required:true,
            maxLength:100,
        },
        salary:{
            type: Number,
            required:true,
        },
    }
);

module.exports = mongoose.model("Employee", employeeSchema);