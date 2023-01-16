const express = require('express')
const { UserModel } = require('../../models/users')
const login = express.Router()
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

login.use(express.json())

login.post("/login", async(req,res)=>{
    const {email, password}= req.body
    const data= await UserModel.find({email})
    if(data.length>0){
        bcrypt.compare(password, data[0].password, async(err,result)=>{
            if(result){
                var token = jwt.sign({userID:data[0]._id}, process.env.secret)
                res.send({login:"successfully", token:token})
            }else{
                res.send("please check your password")
            }
        });
    }else{
        res.send("please login first")
    }
})

module.exports={
    login
}

// {
//     "email": "mk@",
//     "password": "123"
//   }

