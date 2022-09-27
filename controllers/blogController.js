const db = require("../models");
const jwt = require("jsonwebtoken");
const {createError} = require("../utils/error");

const blogs = async (req, res, next) => {
    console.log("BLOGS");

    try{

        console.log("BLOGS PAGE")

        const blogList = await db.Blog.find();

        console.log(blogList);

        return res.status(200).json({"blogs": blogList});

    }catch(err){
        console.log(err);
        next(err);
    }
};







const newBlog = async (req, res, next) => {
    console.log("NEW BLOG");

    try{

        console.log("NEW BLOG PAGE")

        console.log(req.body);

        const checkBlog = await db.Blog.findOne({title: req.body.title});

        // {"title": title, "text": text, "selected": selected, "adminId": admin.currentAdmin.adminDetails.id}

        

        if(checkBlog !== null){

            return res.status(403).json({"status": "Blog title must be unique!"});
        }

        const newBlog = new db.Blog({"title": req.body.title, "text": req.body.text, 
                                        "adminId": req.body.adminId, "topic": req.body.topic,
                                        "author": req.body.username});

        console.log(newBlog);
        
        await newBlog.save();
        
        const admin = await db.Admin.findById({_id: req.body.adminId});

        console.log("NEW BLOG ID", newBlog._id);

        console.log("ADMIN", admin);

        admin.blogs.push(newBlog._id);
        await admin.save();

        return res.status(200).json({"newblog": newBlog});

    }catch(err){
        console.log(err);
        next(err);
    }
};


const updateBlog = async (req, res, next) => {
    console.log("UPDATE BLOG");

    try{

        const updateBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updateBlog);
    }
    catch(err){
        res.status(500).json(err);
    }
}


// get one blog
const getBlog = async (req, res, next) => {
    try{
        const blog = await Blog.findById(req.params.id);
        
        res.status(200).json(blog);

    }catch(err){
        res.status(500).json(err);

    }
};





module.exports = {blogs, newBlog, updateBlog, getBlog};