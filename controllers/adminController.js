// const Admin = require("../models/Admin");
// const User = require("../models/User");
const db = require("../models");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
const jwt = require("jsonwebtoken");

const PASSCODE = process.env.PASSCODE;

const createAdminUser = async (req, res, next) => {

    try{

        const user = await db.User.findOne({email: req.body.email})

        if(user === null){

            return next(createError(404, "User does not exist"));

        }

        const adminUser = await db.Admin({email: user.email, userId: user._id});

        adminUser.save();

        res.status(200).json({"admin": "New admin user created"});

    }catch(err){

        console.log(err);
        next(err);
    }
}


const loginAdmin = async (req, res, next) => {

    console.log("LOGIN ADMIN");

    try{

        const admin = await db.Admin.findOne({email: req.body.email})
        const user = await db.User.findOne({email: req.body.email})

        console.log("ADMIN", admin);
        console.log("USER", user);
        console.log(user === null);
        console.log(admin === null);
        console.log("PASSCODE", PASSCODE);

        if(user === null){
            return next(createError(404, "Invalid credentials"));
        }

        if(req.body.passcode !== PASSCODE){
            return next(createError(400, "Invalid credentials"));
        }

        admin.online = true;
        admin.loginCount += 1;
        admin.save();
  
        const adminToken = jwt.sign({id: admin._id, isAdmin: user.isAdmin, username: user.username},
            process.env.JWT_SECRET_KEY, {expiresIn: "3d"});

        const {password, createdAt, updatedAt, ...details} = user._doc;

        const adminDetails = {id: admin._id, isAdmin: user.isAdmin, username: user.username, email: admin.email,
                                online: admin.online, loginCount: admin.loginCount};

        console.log("ADMIN TOKEN", adminToken);

        console.log("DETAILS", details);

        
        res.cookie("admin", adminToken, {
            httpOnly: true,
            domain: "http://localhost:3000",
            expiresIn: new Date(new Date().getTime() + 30 *1000),
            sametSite: "strict",
            path:"/",
            secure: true,
        }).status(200).json({adminDetails, adminToken});
        


    }catch(err){
        console.log(err);
        next(err);
    }

}


const logoutAdmin = async (req, res, next) => {
    console.log("LOGOUT ADMIN");
    console.log("REQ ADMIN", req.body.email);

    try{
        // const admin = db.Admin.findOne({email: req.body.email});

        const admin = db.Admin.findByIdAndUpdate({_id: req.params.id},
            {online: false},
            {new: true});



        console.log("TYPE OF", typeof(admin));

        console.log("LOGOUT ADMIN");
        console.log(admin);
        if(admin === null){
            return next(createError(404, "Not Found"));
        }

        console.log("ADMIN ONLINE", admin.online);

        admin.online = false;
        // admin.save();

        return res.status(200).json({"msg": "You've logged out"});
    }catch(err){
        console.log(err);
        return createError(next(400), "Something went wrong!");
    }
}


// getUserTableData
const userTableData = async (req, res, next) => {
    console.log("GET ADMIN TABLE DATA");

    console.log(req.body);


    try{

        const table = await db.User.find();

        console.log("TABLE");


        console.log(table);
        

        return res.status(200).json({"table": table});

    }catch(err){
        console.log(err);
        return createError(next(404, "error for admin table data"));
    }
}


// getAdminTableData
const adminTableData = async (req, res, next) => {
    console.log("GET ADMIN TABLE DATA");

    console.log(req.body);


    try{

        const table = await db.Admin.find();

        console.log("TABLE");


        console.log(table);
        

        return res.status(200).json({"table": table});

    }catch(err){
        console.log(err);
        return createError(next(404, "error for admin table data"));
    }
}


// get admin profile
const adminUserProfile = async (req, res, next) => {
    console.log("GET  USER PROFILE");

    try{

        const user = await db.User.findOne({_id: req.params.id});

        console.log("USER PROFILE FIND");
        console.log(user);

        const {password, __v, ...details} = user._doc;

        if(user === null){

            return res.status(404).json({"status": "This user does not exist or has been deleted"})
        }

        
        return res.status(200).json({"user": details});
    }
    catch(err){

        return createError(next(500, "Something went wrong"));
       
    }
}


// get admin profile
const adminProfile = async (req, res, next) => {
    console.log("GET ADMIN  PROFILE");

    try{

        const admin = await db.Admin.findOne({_id: req.params.id});

        console.log("ADMIN  PROFILE FIND");
        console.log(admin);

        const {password, __v, ...details} = admin._doc;

        if(admin === null){

            return res.status(404).json({"status": "This admin user does not exist or has been deleted"})
        }

        
        return res.status(200).json({"admin": details});
    }
    catch(err){

        return createError(next(500, "Something went wrong"));
       
    }
}

const adminBlog = async (req, res, next) => {
    console.log("ADMIN BLOG");
    try{

        const blog = await db.Blog.findOne({_id: req.params.id});

        if(blog === null){
            return res.status(404).json({"status": "This blog does not exist or has been deleted"});
        }

        return res.status(200).json({"blog": blog});

    }catch(err){
        console.log(err);
        return createError(next(500, "Something went wrong"));
    }
}


module.exports = {loginAdmin, logoutAdmin, createAdminUser, adminTableData, 
                userTableData, adminUserProfile, adminProfile, adminBlog}