import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: String,
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;