const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  language: {
    type: String,
  },
  experience: {
    type: Number,
  },
  price: {
    type: Number,
  },
  duration: {
    type: String,
  },
  link:{
    type: String
  }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
