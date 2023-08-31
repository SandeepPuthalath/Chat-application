const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true, unique: true },
    password: { type: String, require: true, trim: true },
    pic: {
        type: String,
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

userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified('password')) return next();
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword
    } catch (error) {
        next(error)
    }
})


const User = mongoose.model("user", userSchema);
module.exports = User