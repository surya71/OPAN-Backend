const mongoose = require("mongoose");
<<<<<<< HEAD
const { Users,Recipients,Notifications } = require("../models/index");
const {JWTsign} = require('../packages/auth/tokenize');
=======
const { Users } = require("../models/index");
const { JWTsign } = require("../packages/auth/tokenize");
>>>>>>> 3bb87f45b3a4f41475f5aee28a47e42ff9d55f7d

mongoose.connect(
  "mongodb+srv://admin:123@cluster0.o42dd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongodb connected!");
});

<<<<<<< HEAD
class Student{
    static async Login(req,res){
      try {
        const body = req.body;
          Users.findOne({ Rid: body.Rid }, (err, user) => {
          if (err) {
            console.log(err);
          }
          // console.log(consignee);
          if (!user) {
            res.status(401).send("Invalid user Id");
          } else if (body.Password !== user.Password) {
            res.status(401).send("Invalid Password");
          } else {
            const token = JWTsign(user._id);
            res.send({ token ,Designation:user.Designation});
          }
        });
      } catch (error) {
        console.log(error);
      }
=======
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
class Student {
  static async Login(req, res) {
    try {
      const body = req.body;
      Users.findOne({ Rid: body.Rid }, (err, user) => {
        if (err) {
          console.log(err);
        }
        // console.log(consignee);
        if (!user) {
          res.status(401).send("Invalid user Id");
        } else if (body.Password !== user.Password) {
          res.status(401).send("Invalid Password");
        } else {
          const token = JWTsign(user._id);
          res.send({
            token,
            UserName: user.Name,
            UserId: user.Rid,
            Designation: user.Designation,
          });
        }
      });
    } catch (error) {
      console.log(error);
>>>>>>> 3bb87f45b3a4f41475f5aee28a47e42ff9d55f7d
    }
  }
  static async Register(req, res) {
    try {
      const user = new Users(req.body);
      user.save((error, user) => {
        if (error) {
          return res.status(500).send("Invalid");
        } else {
          const token = JWTsign(user._id);
          res.send({ token, Designation: user.Designation });
        }
      });
    } catch (error) {
      console.log(error);
    }
<<<<<<< HEAD
    static async IncomeNotification(req,res){
      try {
        const body = req.body;
        var Rid=body.Rid;
        var outList=[]
          Recipients.find({ Rid: Rid }, (err, recpts) => {
          if (err) {
            console.log(err);
          }
        
            
            recpts.forEach(Recipient => {
              Notifications.findOne({ _id: Recipient.nid}, (err, Notification) => {
                if (err) {
                  console.log(err);
                }
                else{

                  let element={
                    attachmentURL:Notification.AttachmentURL,
                    message:Notification.Message,
                    sender:Notification.Sender,
                    time:Notification.createdAt,
                    status:Recipient.Status
                  }
                  outList.push(element);
                  
                }
            });
            
          });
        });
        res.send(outList);
      } catch (error) {
        console.log(error);
      }
    }
    static async CreateNotification(req,res){
      try {

      }catch(err){
        console.log(err)
      }
    }
=======
  }
>>>>>>> 3bb87f45b3a4f41475f5aee28a47e42ff9d55f7d
}

module.exports = Student;
