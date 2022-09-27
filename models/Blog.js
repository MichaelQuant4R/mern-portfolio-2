const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        unique: true,
        min: 3,
        max: 120,
    },
    text: {
        type: String,
        min: 5,
        max: 500,
    },
    author:{
        type: String,
        required: true,
        max: 40,
    },
    adminId: {
        type: mongoose.Types.ObjectId,
        ref: "Admin",
    },
    topic: {
        type: String,
        required: true,

    },
    views: {
        type: Number,
        default: 0,
    },
}, {timestamps: true});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;