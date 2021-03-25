const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentLoginSchema =new Schema({
    Reg_no: String,
    Name: String,
    Department: String,
    Year: Number,
    EmailId:String,
    Password: String,
    DOB:Date,
    Gender:String
    });
module.exports = {studentLoginSchema};
