const express = require("express");
const { getUser } = require("../service/auth");
const Course = require('../models/course'); 
const router = express.Router();
const User = require("../models/user");

router.get("/home",async (req, res) => {
  const user =  getUser();
  let courses = {};
  try {
     courses = await Course.find({});
    
  } catch (error) {
     courses = {};
  }

  return res.render("home",{user:user,courses:courses});
  
});
router.get("/",async (req, res) => {
  const user =  getUser();
  let courses = {};
  try {
     courses = await Course.find({});
    
  } catch (error) {
     courses = {};
  }

  return res.render("student",{user:user,courses:courses});
  
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/dashboard", async(req, res) => {
 try{
const courses=await Course.find({});
res.render("dashboard",
{
  courses:courses
});
 }
 catch(error) {
console.log(error);
 }





});

router.post("/create", (req, res) => {
res.redirect("/login");
});

router.get("/login", (req, res) => {
  return res.render("login");
});
router.get("/student", (req, res) => {
  return res.render("student");
});



router.post("/user/create", async(req,res) => {
  const { name, email, password,role,googlemeet } = req.body;
  await User.create({
    name,
    email,
    role,
    password,
    googlemeet
  });
  return res.redirect("/login");

});


router.post("/usercourse", async(req,res) => {
  const {  price,duration ,language,experience,link } = req.body;
  const newcourse=new Course({
   price,
   duration,
   language,
   experience,
  link
  });
  await newcourse.save();
  return res.redirect("/dashboard");

});


router.get("/video/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Course.findById(id);

    if (!video) {
      return res.status(404).send("Video not found");
    }

    return res.render("video", { video: video });
  } catch (error) {
    console.error("Error fetching video:", error);
    return res.status(500).send("Internal Server Error");
  }
});




module.exports = router;
