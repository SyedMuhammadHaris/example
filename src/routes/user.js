const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controller/user')

const router = express.Router()
router.get('/check',(req,res)=>{
   res.send("Hellow world")
})

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router
// router.post("/login", userController.loginUser );

