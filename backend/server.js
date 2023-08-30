const express = require("express");
const chats = require("./data/data");
const morgan = require("morgan");
const cors = require("cors");
const configKeys = require("./config");
const routes = require("./routes");

const app = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin:[configKeys.CLIENT_URL]
}))


routes(app)

app.get("/", (req, res) => {
    res.send("Api is running...")
})


app.get('/api/chat', (req, res) => {
    res.json(chats)
})


app.get('/api/chat/:id', (req, res) =>{

    const id = req.params?.id
    const singleChat = chats.find(c => c._id === req.params?.id);
    res.send(singleChat)
})

const PORT = configKeys.PORT || 5000

console.log(PORT)

app.listen(PORT, console.log(`Server starting on PORT ${PORT}`))

module.exports = app