import { useState } from "react";

function Quiz() {

  const questions = [

    {
      question: "Who created React?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook",
    },

    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Multi Language",
        "None",
      ],
      answer: "Hyper Text Markup Language",
    },

    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "Python", "Java"],
      answer: "CSS",
    },

    {
      question: "Which company developed Java?",
      options: ["Sun Microsystems", "Google", "Microsoft", "IBM"],
      answer: "Sun Microsystems",
    },

    {
      question: "What is Node.js?",
      options: [
        "Frontend Framework",
        "Runtime Environment",
        "Database",
        "Operating System",
      ],
      answer: "Runtime Environment",
    },

    {
      question: "Which hook is used for state in React?",
      options: ["useFetch", "useState", "useRouter", "useEffect"],
      answer: "useState",
    },

    {
      question: "Which database is used in MERN?",
      options: ["MySQL", "MongoDB", "Oracle", "Firebase"],
      answer: "MongoDB",
    },

    {
      question: "Tailwind CSS is a?",
      options: ["Library", "Framework", "Database", "Language"],
      answer: "Framework",
    },

    {
      question: "Which symbol is used for comments in JS?",
      options: ["//", "##", "<!-- -->", "**"],
      answer: "//",
    },

    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Program Internet",
        "Application Process Integration",
        "None",
      ],
      answer: "Application Programming Interface",
    },

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [correct, setCorrect] = useState(0);

  const [wrong, setWrong] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (

    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-5">

      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-3xl">

        {!showResult ? (

          <>

            <h1 className="text-5xl font-bold text-cyan-400 mb-10">
              Quiz System
            </h1>

            <h2 className="text-3xl mb-10">
              {questions[currentQuestion].question}
            </h2>

            <div className="grid gap-5">

              {questions[currentQuestion].options.map((option, index) => (

                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-cyan-500 hover:bg-cyan-600 transition-all p-4 rounded-xl text-xl font-semibold"
                >
                  {option}
                </button>

              ))}

            </div>

          </>

        ) : (

          <div className="text-center">

            <h1 className="text-6xl font-bold text-green-400 mb-8">
              Quiz Result
            </h1>

            <h2 className="text-4xl mb-5">
              Your Score: {score} / 10
            </h2>

            <p className="text-2xl text-green-400 mb-3">
              Correct Answers: {correct}
            </p>

            <p className="text-2xl text-red-400 mb-6">
              Wrong Answers: {wrong}
            </p>

            <h2
              className={`text-5xl font-bold ${
                score >= 5 ? "text-green-400" : "text-red-400"
              }`}
            >
              {score >= 5 ? "PASS ✅" : "FAIL ❌"}
            </h2>

          </div>

        )}

      </div>

    </div>

  );
}

export default Quiz;