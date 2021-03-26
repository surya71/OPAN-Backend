const mongoose=require('mongoose');
const { Model } = mongoose;
const {
	UserSchema
	}=require('../packages/schemas/index');

class User extends Model {
}
const Users=mongoose.model(User,UserSchema,'users');
module.exports={
    Users
	};