const ProductModel=require('../models/productModel')

const createProduct= async function(req,res){
    const data=req.body
    const saveData= await ProductModel.create(data)
    res.send({msg:saveData})
}

const getProduct=async function(req,res){
   const allProduct= await ProductModel.find()
   res.send({msg:allProduct})
}


module.exports.createProduct=createProduct

module.exports.getProduct=getProduct 