const express = require("express");
const router = express.Router();
const {blogs, newBlog, updateBlog,getBlog } = require("../controllers/blogController");

router.get("/blogs", blogs);
router.post("/new-blog", newBlog);
router.put("/updateBlog/:id", updateBlog);
router.get("/getBlog/:id", getBlog);



module.exports = router;