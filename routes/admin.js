const express = require("express");
const router = express.Router();
const {loginAdmin, createAdminUser, logoutAdmin, adminTableData, 
    adminUserProfile, userTableData, adminProfile, adminBlog} = require("../controllers/adminController");

router.post("/admin-login", loginAdmin);
router.put("/admin-logout/:id", logoutAdmin);
router.post("/admin-create-user", createAdminUser);
router.get("/admin-table-data", adminTableData);
router.get("/user-table-data", userTableData);
router.get("/admin-user-profile/:id", adminUserProfile);
router.get("/admin-profile/:id", adminProfile);
router.get("/user-profile/:id", adminUserProfile);
router.get("/admin-blog/:id", adminBlog);



module.exports = router;