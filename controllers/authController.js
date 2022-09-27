// const User = require("../models/User");
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("../utils/error");


const register = async (req, res, next) => {
    console.log("REGISTER");

    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const user = await db.User.findOne({email: req.body.email});

        if(user){

            return next(createError(403, "User with that email already exists" ));
           
        }

        const newUser = new db.User({...req.body, password: hash});

        await newUser.save();

        return res.status(200).json("New user created. Thanks for signing up!");


    }catch(err){
        console.log(err);
        next(err);
    }
};

const login = async (req, res, next) => {
    console.log("LOGIN");

    try{

        const user = await db.User.findOne({email: req.body.email});

        
        if(user === null){
            return next(createError(403, "Invalid email and/or password"));
        }

        const checkPassword = await bcrypt.compare(
            req.body.password, user.password
        );


        if(!checkPassword){
            return next(createError(400, "Invalid email and/or password"));
        }

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin, username: user.username},
            process.env.JWT_SECRET_KEY, {expiresIn: "3d"});

            console.log(token);

        user.loginCount += 1;
        user.online = true;
        user.save();

        const {password, createdAt, updatedAt, isAdmin, ...details} = user._doc;



        res.cookie("accessToken", token, {
            httpOnly: true,
            domain: "http://localhost:3000",
            expiresIn: new Date(new Date().getTime() + 30 *1000),
            sametSite: "strict",
            path:"/",
            secure: true,
        }).status(200).json({...details, token});
        

    }catch(err){
        console.log(err);
        next(err);
    }
};

const logout = async (req, res, next) => {
    console.log("LOGOUT");
    console.log("REQ", req.body.email);

    try{
        const user = db.User.findByIdAndUpdate({_id: req.params.id},
            {$set: {online: false}},
            {new: true}
            );

        console.log("LOGOUT USER");
        console.log(user);
        if(user === null){
            return next(createError(404, "Not Found"));
        }
        // user.save();

        return res.status(200).json({"msg": "You've logged out"});
    }catch(err){
        console.log(err);
        return createError(next(400), "Something went wrong!");
    }
}

module.exports = {register, login, logout};