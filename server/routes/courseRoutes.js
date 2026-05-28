import express from "express";
import Course from "../models/Course.js";

const router = express.Router();


// GET all courses
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ADD course
router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);

    await course.save();

    res.status(201).json({
      message: "Course Added",
      course,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

export default router;