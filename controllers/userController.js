const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {createError} = require("../utils/error");







const testingUser2 = async (req, res, next) => {

    console.log(req.headers.token);
    try{
        console.log("RUNNING TESTING USER 2");
    }
    catch(err){
        console.log(err);
    }
}




const getUsers = async (req, res, next) => {
    console.log("GET ALL USERS");
    try{
         const users = await User.find();
         return res.status(200).json({"users": users});
    }catch(err){
        console.log(err);
        next(err);
    }
};


const getUser = async (req, res, next) => {
    console.log("GET USER");
    try{
         const user = await User.find({email: req.body.email});
         return res.status(200).json({"user": user});
    }catch(err){
        console.log(err);
        next(err);
    }
};


const updateUser = async (req, res, next) => {
    console.log("UPDATE USER");
    try{
         const updated = await User.findByIdAndUpdate({...req.body}, {new: true});
         return res.status(200).json({"updated": updated});
    }catch(err){
        console.log(err);
        next(err);
    }
};


const deleteUser = async (req, res, next) => {
    console.log("DELETE USER");
    try{
         await User.findByIdAndDelete({id: req.params.id});

         return res.status(200).json({"delete": true});
    }catch(err){
        console.log(err);
        next(err);
    }
};

const addUser = async (req, res, next) => {
    console.log("ADD NEW USER");

    console.log(req.body);

    try{

        const user = User.findOne({email: req.body.email});

        if(user !== null){

            return createError(next(403, "User already exists with the email"));
        }

        const newUser = await User({...req.body});
        newUser.save();
        return res.status(200).json("New user added by admin");


        
    }catch(err){
        console.log(err);
        next(err);
    }
}








module.exports = {getUsers, updateUser, deleteUser, getUser, addUser, testingUser2};