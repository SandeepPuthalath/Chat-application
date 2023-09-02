const asyncHandler = require("express-async-handler");
const AppError = require("../utils/AppError");
const HttpStatus = require("../utils/httpStatus");
const User = require("../database/models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const configKeys = require("../config");

function authController() {

   const handleLogin = asyncHandler(async (req, res, next) => {
      const authTokens = {
         access: "",
         refresh: ""
      }
      const { email, password } = req.body
      const user = await User.findOne({ email });
      if (!user) {
         throw new AppError("This user dose not exist", HttpStatus.NOT_FOUND);
      }
      const isMatch = await bcrypt.compare(password, user?.password);
      if (!isMatch) {
         throw new AppError('The password dose not match', HttpStatus.UNAUTHORIZED)
      }
      const { _id, name, pic, isAdmin } = user
      authTokens.access = jwt.sign({ _id, name, email, pic, isAdmin }, configKeys.JWT_ACCESS_TOKEN_SECRET);
      res
         .status(HttpStatus.SUCCESS)
         .json({ status: "success", message: "Successfully logged in", authTokens });

   })

   const handleRegister = asyncHandler(async (req, res, next) => {
      const { name, email, password } = req.body
      if (!name, !email, !password) {
         throw new AppError("Please enter all the values", HttpStatus.BAD_REQUEST)
      }
      //checking if the user allready exist in database or not
      const userExist = await User.findOne({ email });
      if (userExist) {
         throw new AppError("User with this email address already exists", HttpStatus.CONFLICT)
      }

      const newUser = new User({
         name,
         email,
         password
      })

      await newUser.save()

      res.status(HttpStatus.SUCCESS).json({
         _id: newUser?._id,
         name: newUser?.name,
         email: newUser?.email,
         pic: newUser?.pic,
      })


   })

   return {
      handleLogin,
      handleRegister,
   }

}

module.exports = authController


