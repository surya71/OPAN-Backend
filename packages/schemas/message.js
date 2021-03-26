const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotificationSchema = new Schema({
    Sender : String,
    Sender_Desigination:String,
    Sender_Name:String,
    Message : String,
    AttachmentURL : String,
},{timestamps:true}
);
const RecipientSchema = new Schema({
    
    Nid : String,
    Rid : String,
    Status : Boolean,
}
);
module.exports = {RecipientSchema,
                NotificationSchema};