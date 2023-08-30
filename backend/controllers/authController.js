const expressAsyncHandler = require("express-async-handler")


function authController(){

 const handleLogin = expressAsyncHandler((req, res, next) =>{
    console.log(req.body)
 })

 const handleRegister = expressAsyncHandler((req, res, next) =>{
    console.log("register controller",req.body)
 })

 return{
    handleLogin,
    handleRegister,
 }

}

module.exports = authController


