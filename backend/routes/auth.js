const express = require("express");
const authController = require("../controllers/authController");


function authRouter() {
    const controller = authController()

    const router = express.Router();


    router.post("/login", controller.handleLogin);

    router.post("/register", controller.handleRegister);


    return router

}


module.exports = authRouter