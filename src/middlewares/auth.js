const jwt = require("jsonwebtoken");

    const tokenCheck = function(req,res,next){
            let token = req.headers["x-auth-token"];
            if(!token) return res.send({ status:false, msg:"token must be present"})
            if(!token) return res.status(401).send({ status:false, msg:"token must be present"})
            let decodedToken = jwt.verify(token, "functionup-thorium")
            if(!decodedToken) return res.send({ status: false, msg: "token is invalid"})
            if(!decodedToken) return res.status(401).send({ status: false, msg: "token is invalid"})
            next()
        }



      //--------------------------------------------------------------------------------------------------------------------------------------------------------------------  

        const authorise = function(req, res, next) {
            let token = req.headers["x-auth-token"];
            let decodedToken = jwt.verify(token, 'functionup-thorium')
            let userToBeModified = req.params.userId
            let userLoggedIn = decodedToken.userId
            if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
            if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

            // comapre the logged in user's id and the id in request
            next()
@@ -29,4 +29,3 @@ const jwt = require("jsonwebtoken");
    module.exports.tokenCheck =tokenCheck

    module.exports.authorise =authorise