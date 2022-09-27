const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        min: 12,
        max: 40,
    },
    msg: {
        type: String,
        required: true,
        min: 3,
        max: 500,
    },
}, {timestamps: true});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;