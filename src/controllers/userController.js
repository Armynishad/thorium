const UserModel= require("../models/purchaseModel")
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
*/


const UserModel= require("../models/purchaseModel")

const createUser= async function (req, res) {

   let isUser = req.headers["isfreeappuser"]
    let data= req.body
   data.isFreeAppUser = isUser

    let savedData= await UserModel.create(data)
    console.log(req.newAtribute)

    res.send({msg: savedData})

}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    console.log(req.newAtribute)
    res.send({msg: allUsers})
}

module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
