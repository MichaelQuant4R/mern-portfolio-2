const mongoose = require("mongoose");


const AdminSchema = new mongoose.Schema({

    email: {
        type: String,
        min: 12,
        max: 40,
        required: true,
    },

    level: {
        type: String,
        default: "owner", // owner, super, member, guest
    },

    blogs: {
        type: Array,
        default: [{}],
    },

    online: {
        type: Boolean,
        default: false,
    },

    loginCount: {
        type: Number,
        default: 0,
    },

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;