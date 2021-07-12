const asyncHandler = require('express-async-handler')
const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const registerUsers =asyncHandler(async(req, res) => {
    const userAlready = await User.findOne({ email: req.body.email })
 
      if (userAlready) {
         res.status(500)
          throw new Error('User Already Registered')
      } else {
          
         const user = await User.create({
          name: req.body.name,
          email: req.body.email,
          number: req.body.number,
          password: bcrypt.hashSync(req.body.password,10)
         })
           const secret = process.env.SECRET

 const token = jwt.sign({id: user.id},secret,{
     expiresIn: '99d'
 })
      res.status(201).json({
          id: user.id,
          name:user.name,
        email:user.email,
        number:user.number,
        password: user.password,
        token
       })
         user.save()
      }
})
//users signin
const signinUsers =asyncHandler(async(req, res) => {
    const {email,password} = req.body
 const user = await User.findOne({email})
 if(!user){
    res.status(404)
     throw new Error('User Not Found')
 }
  const cmp = await bcrypt.compareSync(password, user.password)
    if(!cmp){
        res.status(400)
        throw new Error('Password is wrong')
    }
 const secret = process.env.SECRET

 const token = jwt.sign({id: user.id},secret,{
     expiresIn: '99d'
 })
 res.status(200).json({
    
         token,
         name: user.name,
         email:user,email,
         number:user.number
   
 })
})

//user profile
//private routes
const profile =asyncHandler(async(req, res) => {
try{
const user = await User.findById(req.user.id)
res.status(200).json({
       
         id: user.id,
         name: user.name,
         email:user.email,
         number:user.number,
         isAdmin:user.isAdmin

})
}catch(error){

console.log(error)
}
})
module.exports={registerUsers,signinUsers,profile}