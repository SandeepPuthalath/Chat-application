const dotenv = require("dotenv");
dotenv.config();
const configKeys = {
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
    JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET
}


module.exports = configKeys