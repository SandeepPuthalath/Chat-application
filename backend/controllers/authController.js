const asyncHandler = require("express-async-handler");
const AppError = require("../utils/AppError");
const HttpStatus = require("../utils/httpStatus");
const User = require("../database/models/userModel")

function authController() {

   const handleLogin = asyncHandler((req, res, next) => {
      console.log(req.body)
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

      if (newUser) {
         res.status(HttpStatus.SUCCESS).json({
            _id: newUser?._id,
            name: newUser?.name,
            email: newUser?.email,
            pic: newUser?.pic,
         })
      }

   })

   return {
      handleLogin,
      handleRegister,
   }

}

module.exports = authController


