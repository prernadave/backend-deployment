const express = require('express')
const { Postmodel } = require('../../models/create.post')

const getroute= express.Router()

getroute.get("/",async(req,res)=>{
    const{userID}= req.body;
    const data= await Postmodel.find({userID:userID});
    res.send(data)
})

getroute.get("/getbyquery", async(req,res)=>{
    const {userID} = req.body;
    const device = req.query.device
    const data= await Postmodel.find({device:device})
    res.send(data)
})


// getroute.get("/getbyquery", async(req,res)=>{
//     const {userID} = req.body;
//     const device = req.query.device
//     const data= await Postmodel.find({device:device})
//     res.send(data)
// })

getroute.get("/getbyandquery", async(req,res)=>{
    const {userID} = req.body;
    const device1 = req.query.device1
    const device2 = req.query.device2
    const data= await Postmodel.find({device:device1},{device:device2})
    res.send(data)
})



module.exports={
    getroute
}

