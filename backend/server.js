const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const connectDb = require("./database/connection");
const errorHandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");
const chats = require("./data/data");
const configKeys = require("./config");
const HttpStatus = require("./utils/httpStatus");
const colors = require("colors")


const app = express();
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: [configKeys.CLIENT_URL]
}))

//database connection
connectDb()

//all routes
routes(app)

app.get("/", (req, res) => {
    res.send("Api is running...")
})


app.get('/api/chat', (req, res) => {
    res.json(chats)
})


app.get('/api/chat/:id', (req, res) => {

    const id = req.params?.id
    const singleChat = chats.find(c => c._id === req.params?.id);
    res.send(singleChat)
})

app.all("*", (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on the server`, HttpStatus.NOT_FOUNT);
    next(err)
})

// Global error handler
app.use(errorHandler)

const PORT = configKeys.PORT || 5000

app.listen(PORT, console.log(`Server starting on PORT ${PORT}`.yellow.bold))

module.exports = app