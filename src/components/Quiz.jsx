
import { useState, useEffect } from 'react';
import Timer from './Timer';

function Quiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (answered) {
      if (questions[currentQuestion].correctAnswer === selectedAnswer) {
        setScore(score + 1);
      }
      setTimeout(() => {
        setAnswered(false);
        setSelectedAnswer(null);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          onComplete(score);
        }
      }, 1000);
    }
  }, [answered]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
      <div className="mb-4">{questions[currentQuestion].question}</div>
      <div>
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(answer)}
            className="block w-full p-2 mb-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            {answer}
          </button>
        ))}
      </div>
      <Timer />
    </div>
  );
}

export default Quiz;
