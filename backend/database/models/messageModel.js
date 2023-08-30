const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    content: {type: String, trim: true},
    chat: {type: mongoose.Schema.Types.ObjectId, ref: "chats"}
},
{timestamps: true}
)

const Message = mongoose.model("message", messageSchema);

module.exports = Message;
