const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(morgan("dev"))
app.use(cors({
    origin:["http://localhost:3000"]
}))

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server starting on PORT ${PORT}`))

module.exports = app