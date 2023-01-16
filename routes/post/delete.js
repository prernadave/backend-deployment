const express = require('express')
const { Postmodel } = require('../../models/create.post')

const deleteroute= express.Router()

deleteroute.delete("delete/:ID", async(req,res)=>{
    const payload = req.body 
    const ID= req.params.ID
    const posts= await Postmodel.findOne({_id:ID});
    const postid = posts.userID
    const mineID = req.body.userID
    if(postid==mineID){
        await Postmodel.findByIdAndDelete({_id:ID});
        res.send("deleted")
    }else{
        res.send("you cant accesss")
    }
})

module.exports={
    deleteroute
}