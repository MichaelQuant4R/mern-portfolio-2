const db = require("../models");
const jwt = require("jsonwebtoken");
const {createError} = require("../utils/error");


const newMsg = async (req, res, next) => {

    console.log("NEW MSG");

    console.log(req.body);

    try{

        const contact = new db.Contact({...req.body});

        await contact.save();

        return res.status(200).json({"msg": contact})


    }catch(err){
        console.log(err);
        next(err);
    }
}

const getMsgs = async (req, res, next) => {

    console.log("GET MSGS");

    try{

        const msgs = await db.Contact.find();

        console.log("MSGS", msgs);

        return res.status(200).json({"get-msgs": msgs});

        

    }catch(err){
        console.log(err);
        next(err);
    }
}

const deleteMsg = async (req, res, next) => {

    try{

        const msg = db.Contact.deleteOne({_id: req.params.id});

        return res.status(200).json({"status": "Deleted msg"});

    }catch(err){
        console.log(err);
        next(err);
    }
}



module.exports = {newMsg, getMsgs, deleteMsg};