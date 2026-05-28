import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,

  description: String,

  videos: Number,

  hours: Number,

  progress: {
    type: Number,
    default: 0,
  },

  videoLink: {
    type: String,
    default: "",
  },
});

const Course = mongoose.model(
  "Course",
  courseSchema
);

export default Course;