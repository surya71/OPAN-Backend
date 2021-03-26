const mongoose = require("mongoose");
const { Users } = require("../models/index");
const {JWTsign} = require('../packages/auth/tokenize');

mongoose.connect(
  "mongodb+srv://admin:123@cluster0.o42dd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongodb connected!");
});

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:123@cluster0.o42dd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const db = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// db.connect(err => {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("MongoDB connected");
//   }
// });
class Student{
    static async Login(req,res){

    }
    static async Register(req,res){
        try {
            const user = new Users(req.body);
            user.save((error, user) => {
              if (error) {
                return res.status(500).send("Invalid");
              } else {
               
                res.send(user);
              }
            });
          } catch (error) {
            console.log(error);
          }
    }
}

module.exports = Student;