const { count } = require("console")

const orderModel = require("../models/orderPurchaseModel")
const userModel = require('../models/purchaseModel')
const productModel = require('../models/productModel')



const createOrder = async function (req, res) {

    let data=req.body;
    let userId = data.userId;
    let productId = data.productId;

    let freeUser = req.headers.isFreeAppUser


    if (!userId) {
        return res.send({ message: "User doesn't exist" })
    }
    let user = await userModel.findById(userId)
    if(!user){
        res.send({error:"wrong userID entered"})
    }
    if(!productId)
    {
        return res.send({ message: "product doesn't exist" })  
    }
    let product = await productModel.findById(productId)
    if (!product) {
        return res.send({ message: "wrong productID entered" })
    }

    let productDetail=await productModel.findById(productId);
    let priceValue=productDetail.price;


    let userDetail=await userModel.findById(userID)
    let userBalance=userDetail.balance;



    if(freeAppUser==="false"){
        if(userBalance>priceValue){
            let updatedBalance=await userModel.findByIdAndUpdate(
           {_id:userID},
           {$inc:{balance: -priceValue}},
           {new:true}
            );
            data.amount=priceValue;
            data.isFreeAppUser=false
            let orderDetail = await orderModel.create(data);
            res.send({order:orderDetail});
        }else{
            res.send({error:"insufficient balance"});
        }
    }else{
        data.amount=0;
        data.isFreeAppUser=true
        let orderDetails=await orderModel.create(data);
        res.send({order:orderDetails});
    }
  };

module.exports.createOrder = createOrder 