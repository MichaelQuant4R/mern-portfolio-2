const db = require("../models");
const createError = require("../utils/error");

const newProject = async (req, res, next) =>{
        console.log("NEW PROJECT!");
        
        try{
  
            const checkProject = await db.Project.findOne({title: req.body.title});

            if(checkProject){
                return res.status(403).json({"status": "This project already exists!"})
            }

            const {tags, ...details} = req.body;
            const tagList = tags.split(" ");
            const projectAdmin = await db.Project(details);

            for(var i = 0; i < tagList.length; i++){

                console.log("TAG", tagList[i]);
                projectAdmin.tags.push(tagList[i]);
            }
            await projectAdmin.save();
            
            console.log("VIEW PROJECT ADMIN", projectAdmin);
            return res.status(200).json({"status": "Project created successfully!"});

        }catch(err){
            console.log(err);
            return next(createError(500, "Something went wrong!"));
        }
}

const getProject = async (req, res, next) =>{
        console.log("GET PROJECT!");
        try{
            console.log(req.body);

            return res.status(200).json({"status": []});

        }catch(err){
            next(createError(500, "Something went wrong!"));
        }
}
const getProjects = async (req, res, next) =>{
        console.log("GET PROJECTS!");
        try{
            const table = await db.Project.find();

            console.log(table)

            return res.status(200).json({"table": table});

        }catch(err){
            next(createError(500, "Something went wrong!"));
        }
}

module.exports = {newProject, getProject, getProjects};