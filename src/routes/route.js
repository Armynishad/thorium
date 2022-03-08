const express = require('express');

const router = express.Router();
// const UserModel= require("../models/userModel.js")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
const ProductController=require("../controllers/productController")

router.post("/createUser", UserController.createUser  )
const purchaseController=require("../controllers/purchaseController")

router.get("/getUsersData", UserController.getUsersData)
//middleWare

router.post("/createBook", BookController.createBook  )
let headCheck = function(req,res,next){

    let isFreeAppUser = req.headers["isfreeappuser"]

    if(isFreeAppUser != undefined){

router.get("/getBooksData", BookController.getBooksData)
      console.log("control goes to middleware")

        next();

}else{

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)
    res.send(" MISSING Header")

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {

    // const today = moment();
    // let x= today.add(10, "days")
}

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)

    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');
}

router.post("/createProduct",ProductController.createProduct  )

 router.get("/getProduct", ProductController.getProduct)

router.post("/createUser",headCheck, UserController.createUser)

 router.get("/getUsersData", UserController.getUsersData)

 router.post("/createOrder",headCheck, purchaseController.createOrder )

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router; 