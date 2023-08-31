const mongoose = require("mongoose");
const configKeys = require("../config")
const MONGODB_URI = configKeys.MONGODB_URI

const connectDb = () => {

    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ).then(() => {
        console.log("Database connected successfully".cyan.underline)
    }).catch((err) =>{
        console.error(err)
    })
}

module.exports = connectDb
