const express = require('express')
const { Postmodel } = require('../../models/create.post')

const updateroute= express.Router()

updateroute.patch("update/:ID", async(req,res)=>{
    const payload = req.body 
    const ID= req.params.ID
    const posts= await Postmodel.findOne({_id:ID});
    const mineID = req.body.userID
    if(posts==mineID){
        await Postmodel.findByIdAndUpdate({_id:ID},payload);
        res.send("updated")
    }else{
        res.send("please login first")
    }
})

module.exports={
    updateroute
}