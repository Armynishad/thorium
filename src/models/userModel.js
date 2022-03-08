const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        name:String,
        balance:{
            type:Number,
            default:100,
        },
        address:String,
        age:Number,
         gender:{

        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
             type:String,

             enum:["male","female","other"],
         },

        isFreeAppUser: {
            type:Boolean,
            default:false 
        }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users
module.exports = mongoose.model('UserM', userSchema) 



// String, Number
// Boolean, Object/json, array 