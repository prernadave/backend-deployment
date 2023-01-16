const express = require('express')
const app = express()
require('dotenv').config()
const { connection } = require('./config/db')
const { authentication } = require('./middleware/authentication')
const { getroute } = require('./routes/post/get')
const { createpost } = require('./routes/post/register.post')
const { updateroute } = require('./routes/post/update')
const { login } = require('./routes/user/login')
const { register } = require('./routes/user/register')





app.use(express.json())



app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

app.use("/users",register)
app.use("/users", login)
app.use(authentication)
app.use("/posts",createpost)
app.use("/posts",getroute)
app.use("/posts",updateroute)

app.listen(process.env.port || 5555, async()=>{
   try {
    await connection
    console.log("connected to db");
   } catch (error) {
    console.log(error);
    console.log("can't connect");
   }
   console.log(`server is running at port ${process.env.port}`);
})


