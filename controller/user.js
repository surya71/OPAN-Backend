const mongoose = require("mongoose");

const { Users,Recipients,Notifications } = require("../models/index");
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
  }
    // static async IncomeNotification(req,res){
    //   try {
    //     const body = req.body;
    //     var Rid=body.Rid;
    //     var outList=[]
    //       var recpts=[];
	// 		Recipients.find({ Rid: Rid }, async(err, recpts) => {
    //       if (err) {
    //         console.log(err);
    //       }
    //       return recpts;
    //     });
	// 	const getmsg = async (recpts)=>{
    //         recpts.forEach(Recipient => {
    //           Notifications.findOne({ _id: Recipient.Nid}, (err, Notification) => {
    //             if (err) {
    //               console.log(err);
    //             }
    //             else{
    //               console.log(Notification)
    //               let element={
    //                 attachmentURL:Notification.AttachmentURL,
    //                 message:Notification.Message,
    //                 sender:Notification.Sender,
    //                 time:Notification.createdAt,
    //                 status:Recipient.Status
    //               }
    //               outList.push(element);
                  
    //             }
    //         });
    //       });
    //       return outList;
    //       }
	// 	res.send(getmsg(recpts));
        
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    static async IncomeNotification(req,res){
		try {
		  const body = req.body;
		  var Rid=body.Rid;
		  var outList=[]
			const recpts = await Recipients.find({ Rid: Rid });//(err, recpts) => {
			// if (err) {
			//   console.log(err);
			// }
			// console.log(recpts)
			  
			  for(const Recipient of recpts){
				const Notification= await Notifications.findOne({ _id: Recipient.Nid});//, (err, Notification) => {
				  // if (err) {
				  //   console.log(err);
				  // }
				  // else{
					console.log(Notification)
					let element={
					  attachmentURL:Notification.AttachmentURL,
					  message:Notification.Message,
					  sender:Notification.Sender,
					  time:Notification.createdAt,
					  status:Recipient.Status
					}
					outList.push(element);
					
				  }
		  res.send(outList);
		} catch (error) {
		  console.log(error);
		}
	  }
    static async CreateNotification(req,res){
      try {
        const body = req.body;
        console.log(body)
        const {Rid,...remaing}=body
        console.log(Rid)
        const notification = new Notifications(remaing);
        notification.save((err,message)=>{
          if(err)console.log(res);
          else {
            const recipt = new Recipients({Nid:message._id,Status:false,Rid:Rid});
            recipt.save((err,recipt)=>{
              if(err)console.log(err);
              else res.send(recipt)
            })
          }
        })
      }catch(err){
        console.log(err)
      }
    }
  }

module.exports = Student;
