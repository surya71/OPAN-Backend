const mongoose=require('mongoose');
const { Model } = mongoose;
const {
	RecipientSchema,
    NotificationSchema
}=require('../packages/schemas/index');

class Recipient extends Model {
}
class Notification extends Model {
}
const Recipients=mongoose.model(Recipient,RecipientSchema,'recipient');
const Notifications=mongoose.model(Notification,NotificationSchema,'notification');
module.exports={
    Recipients,
    Notifications
	};