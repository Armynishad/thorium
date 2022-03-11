 //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  try {let data = req.body;
  let savedData = await userModel.create(data);
  console.log(res.newAtribute);
  res.send({ msg: savedData });
 };

  res.status(201).send({ msg: savedData });
}catch (error){
  res.status.send(500).send(error.message)}}


//---------LoginByEmailAndPassword---------------------------------------------------------------------------------------------------------------------------------------

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  try{
        let userName = req.body.emailId;
        let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
        let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });
@@ -40,109 +44,82 @@ const loginUser = async function (req, res) {
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};
  res.status(200).send({ status: true, data: token });
}
catch(error){

  res.status(500).send(error.message)}};


//--------GetUSersData-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  console.log(token);

  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself

  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    return res.status(400).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });}
  catch(error){
    res.status(500).send(error.message)
  }};

  res.send({ status: true, data: userDetails });
};

//-------------UpdateUser-----------------------------------------------------------------------------------------------------------------------------------------------------------
const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  try{  let newId = req.params.userId;
    let user = await userModel.findById(newId);

    if (!user) {
      return res.status( 400 ).send("No such user exists");                      /////////////////////
    }
  let userUpdatedNumber = req.body;
    let updatedUser = await userModel.findOneAndUpdate({_id:newId},userUpdatedNumber,{new:true});
    res.status( 202 ).send({ status: user, data: updatedUser });                         /////////////////////
  }catch(error){
    res.status(500).send(error.message)                   /////////////////////
  }};

//---------------PostMessage--------------------------------------------------------------------------------------------------------------------------------------------------

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

//---------------PostMessage--------------------------------------------------------------------------------------------------------------------------------------------------
const postMessage = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
  try{  let message = req.body.message

    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
   let user = await userModel.findById(req.params.userId)
    if(!user) return res.status( 400 ).send({status: false, msg: 'No such user exists'})        ////////////////////

    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}


    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true});
    return res.status( 201 ).send({status: true, data: updatedUser})                ////////////////////////////////
}catch(error){
  res.status(500).send(error.message)             //////////////////////
}}

////--------------------------delete-user----------------------------------------------------

const isdeletedUser = async function (req, res) {
  let isDeletedId = req.params.userId;
  let isDeletedProperty = await userModel.findByIdAndUpdate({_id:isDeletedId},{$set: {isDeleted:true}},{new:true});
  res.send({ status: true, data: isDeletedProperty });
};













  try{  
      let isDeletedId = req.params.userId;
    let isDeletedProperty = await userModel.findByIdAndUpdate({_id:isDeletedId},{$set: {isDeleted:true}},{new:true});
    res.status( 200 ).send({ status: true, data: isDeletedProperty });           ////////////////////////////
  }catch(error){
    req.status(500).send(error.message)    //////////////////////////////////
  }};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;