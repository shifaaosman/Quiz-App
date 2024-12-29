import { useState, useEffect } from "react";
import Timer from "./Timer";

function Quiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (answered) {
      const correct = questions[currentQuestion].correctAnswer === selectedAnswer;
      setScore((prevScore) => prevScore + (correct ? 1 : 0));
      setTimeout(() => {
        setAnswered(false);
        setSelectedAnswer(null);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          const correctAnswers = score + (correct ? 1 : 0);
          const incorrectAnswers = questions.length - correctAnswers;
          onComplete(correctAnswers, incorrectAnswers);
        }
      }, 1000);
    }
  }, [answered]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 p-6 md:p-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Question {currentQuestion + 1}</h2>
        <div className="text-lg text-gray-700 mb-6">{questions[currentQuestion].question}</div>
        <div className="flex flex-col space-y-4">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(answer)}
              className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ease-in-out ${
                selectedAnswer === answer
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 scale-105 shadow-lg"
                  : "bg-gradient-to-r from-blue-500 to-teal-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600"
              }`}
            >
              {answer}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
