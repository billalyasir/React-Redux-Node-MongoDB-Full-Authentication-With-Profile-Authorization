const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true,
},
email:{
    type: String,
    required: true,
    unique: true,
},
number:{
    type: String,
    required: true,
    trim:true
},
password:{
    type: String,
    required:true,
},
isAdmin:{
    type: Boolean,
    default: false,
}
})

const User = mongoose.model('User', userSchema)
module.exports = User