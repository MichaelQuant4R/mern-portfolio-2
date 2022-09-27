const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 4,
        max: 50,
        required: true,
    },
    //link to firebase image
    image: {
        type: String,
    },
    github:{
        type: String,
        required: true,
    },
    // link to heroku
    link: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
        min: 5,
        max: 100,
        required: true,
    },
    tags: {
        type: Array,
        default: [],
    },
}, {timestamps: true});

const Project =  mongoose.model("Project", ProjectSchema);
module.exports = Project;