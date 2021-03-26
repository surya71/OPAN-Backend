const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema =new Schema({
    Rid: String,
    Name: String,
    Designation:{
        type : "String",
        enum : ['student','HOD','classAdvisor','principal','PD','other'],
        default:'other'
    },
    Department: String,
    Year: Number,
    EmailId:String,
    Password: String,
    DOB:Date,
    DOJ:Date,
    Gender: {
        type : "String",
        enum : ['male','female','other'],
        default:'other'
    }
    });
module.exports = {UserSchema};
