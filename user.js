const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");
const { createCourse } = require("../controllers/course");

const router = express.Router();

// router.post("/create", handleUserSignup);
router.post("/login", handleUserLogin);
// router.post("/course",createCourse);
module.exports = router;
