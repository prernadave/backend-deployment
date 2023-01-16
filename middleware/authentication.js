const jwt = require('jsonwebtoken')
require('dotenv').config()

const authentication = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token, process.env.secret);
        if(decoded){
             console.log(decoded.userID);
             const userID = decoded.userID;
             req.body.userID= userID;
             next()
        }else{
            res.send("data is not verified")
        }

    }else{
        res.send("you are not authorized")
    }


}
module.exports={
    authentication
}