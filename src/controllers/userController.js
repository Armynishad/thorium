const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const token1 = require("../middleware/auth")

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
@@ -84,7 +83,37 @@ const updateUser = async function (req, res) {
  res.send({ status: updatedUser, data: updatedUser });
};

const updatenewUser = async function (req, res) {


  let newId = req.params.userId;
  let user = await userModel.findById(newId);

  if (!user) {
    return res.send("No such user exists");
  }
let userUpdatedNumber = req.body.mobile;
  let updatedUserMoblieNumber = await userModel.findOneAndUpdate({_id:newId},{$set: {mobile:userUpdatedNumber}},{upsert:true,new:true});
  res.send({ status: user, data: updatedUserMoblieNumber });
};

const userDelete = async function(req,res){
  //let header = req.headers["x-auth-token"]
 // let userDetails = await userModel.findById(header);
  //if (!userDetails)
    //return res.send({ status: false, msg: "header is required" });
  let userId = req.params.userId
  let userDel = await userModel.findOneAndUpdate({_id: userId},{$set: {isDeleted:true}},{$new:true});

  res.send({data:userDel})
};




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.updatenewUser=updatenewUser;
module.exports.userDelete=userDelete;