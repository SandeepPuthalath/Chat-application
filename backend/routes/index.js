const authRouter = require("./auth")


function routes(app){

app.use("/api/auth", authRouter())
     

}


module.exports = routes