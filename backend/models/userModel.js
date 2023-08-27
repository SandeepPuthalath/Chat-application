const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true },
    pic: {
        type: String,
        require: true,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    }
},
{
    timestamps: true
})

const User = mongoose.model("user", userSchema);

module.exports = User;