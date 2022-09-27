const express = require("express");
const router = express.Router();
const {newProject, getProject, getProjects} = require("../controllers/projectController");



router.post("/new-project", newProject);
router.get("/get-project/:id", getProject);
router.get("/get-projects", getProjects);

module.exports = router;