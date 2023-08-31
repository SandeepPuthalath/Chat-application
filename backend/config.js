const dotenv = require("dotenv");
dotenv.config();
const configKeys = {
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGODB_URI:process.env.MONGODB_URI,    
}


module.exports = configKeys