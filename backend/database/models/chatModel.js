const mongoose = require("mongoose")


const chatSchema = mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupCht: { type: Boolean, default: false },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    latestMessages: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message'
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
},
    {
        timestamps: true
    }
)


const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;



//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin
