const express = require('express')
const bcrypt = require('bcrypt')
const { Postmodel } = require('../../models/create.post')


                                                                                                                                                                                                                      
const createpost= express.Router()

createpost.post("/create",async(req,res)=>{
      const payload = req.body
    try {
        const data =  new Postmodel.find(payload)
        await data.save()
        console.log(data);
        res.send("done")
    } catch (error) {
        console.log(error);
    }
})

module.exports={
    createpost
}