import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Course from "./models/Course.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
.connect(process.env.MONGO_URI)
  .then(async () => {

    console.log("MongoDB Connected");

    try {

      const count = await Course.countDocuments();

      // Seed Database
      if (count === 0) {

        await Course.insertMany([
          {
            title: "MERN Stack Course",
            description:
              "Master MongoDB, Express, React, and Node.js to build full-stack web applications.",
            videos: 25,
            hours: 30,
            progress: 100,
            videoLink:
              "https://www.youtube.com/embed/7CqJlxBYj-M",
          },

          {
            title: "React Course",
            description:
              "Learn React basics, components, hooks and frontend development.",
            videos: 12,
            hours: 15,
            progress: 70,
            videoLink:
              "https://www.youtube.com/embed/RGKi6LSPDLU",
          },

          {
            title: "Node.js Course",
            description:
              "Learn backend development using Node.js, Express and APIs.",
            videos: 8,
            hours: 10,
            progress: 40,
            videoLink:
              "https://www.youtube.com/embed/BLl32FvcdVM",
          },
        ]);

        console.log(
          "Database seeded successfully with default courses."
        );
      }

    } catch (err) {

      console.error("Database seeding error:", err);

    }
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

// Get All Courses
app.get("/api/courses", async (req, res) => {

  try {

    const courses = await Course.find();

    res.json(courses);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// Get Single Course
app.get("/api/courses/:id", async (req, res) => {

  try {

    const course = await Course.findById(
      req.params.id
    );

    if (!course) {

      return res.status(404).json({
        message: "Course not found",
      });

    }

    res.json(course);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});