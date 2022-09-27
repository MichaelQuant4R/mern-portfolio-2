const {newMsg, getMsgs, deleteMsg} = require("../controllers/contactController");
const express = require("express");

const router = express.Router();

router.post("/new-msg", newMsg);
router.get("/get-msgs", getMsgs);
router.delete("/delete-msg", deleteMsg);




module.exports = router;