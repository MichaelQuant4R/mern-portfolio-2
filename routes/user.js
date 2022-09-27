const express = require("express");
const router = express.Router();
const {getUsers, updateUser, deleteUser, getUser, addUser, testingUser2 } = require("../controllers/userController");
const {verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization}  = require("../middleware/verifyToken");

router.get("/getUsers", verifyTokenAndAdmin, getUsers);
router.put("/updateUser/:id", verifyTokenAndAdmin, updateUser);
router.delete("/deleteUser/:id", verifyTokenAndAdmin, deleteUser);
router.get("/getUser/:id", verifyTokenAndAdmin, getUser);
router.post("/addUser", verifyTokenAndAdmin, addUser);

router.post("/testing", testingUser2);

module.exports = router;