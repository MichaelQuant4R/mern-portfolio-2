const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 3,
        max: 35,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 12,
        max: 40,
    },
    password: {
        type: String,
        required: true,
        max: 100,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    
    online: {
        type: Boolean,
        default: false,
    },
    loginCount: {
        type: Number,
        default: 0,
    },
    admins: []

}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);