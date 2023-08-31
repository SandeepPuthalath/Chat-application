const express = require("express");
const authController = require("../controllers/authController");


function authRouter() {
    const controller = authController()

    const router = express.Router();

    router.route("/login").post(controller.handleLogin);

    router.route("/register").post(controller.handleRegister);

    return router

}


module.exports = authRouter