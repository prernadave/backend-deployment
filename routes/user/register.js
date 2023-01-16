const express = require('express')
const { UserModel } = require('../../models/users')
const register = express.Router()
register.use(express.json())
const bcrypt = require('bcrypt')


register.post("/register", async (req, res) => {
    const { name, email, gender, password } = req.body


    try {
        bcrypt.hash(password, 5, async (err, secure) => {
            const data = new UserModel({ name, email, gender, password: secure })
            await data.save()
            console.log(data);
            res.send("registered")
        })
    } catch (error) {
        console.log(err);
    }
})

module.exports = {
    register
}
// {
//     "name": "prerna",
//     "email": "prerna@",
//     "gender": "female",
//     "password": "12345"
//   }
// 63c51758f100a2ad5a8820f7

// "name": "mk",
//   "email": "mk@",
//   "gender": "male",
//   "password": "123"
// 63c519847b5cabe1325feb7e