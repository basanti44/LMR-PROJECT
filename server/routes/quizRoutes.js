import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();


// GET all quizzes
router.get("/", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});


// ADD quiz
router.post("/", async (req, res) => {
  try {

    const quiz = new Quiz(req.body);

    await quiz.save();

    res.status(201).json({
      message: "Quiz Added",
      quiz,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
});

export default router;