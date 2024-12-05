import React, { useState } from 'react';
import StartPage from './components/StartPage';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';

const questions = [
  {
    question: 'What is the capital of France?',
    answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is 2 + 2?',
    answers: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
];

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [userName, setUserName] = useState('');

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const finishQuiz = (finalScore, correct, incorrect) => {
    setScore(finalScore);
    setCorrectAnswers(correct);
    setIncorrectAnswers(incorrect);
    setQuizCompleted(true);

    // Save score and breakdown to localStorage
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name: userName, score: finalScore, correctAnswers, incorrectAnswers });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setUserName('');
  };

  return (
    <div>
      {quizCompleted ? (
        <Leaderboard resetQuiz={resetQuiz} />
      ) : quizStarted ? (
        <Quiz
          questions={questions}
          onComplete={finishQuiz}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        />
      ) : (
        <StartPage
          userName={userName}
          setUserName={setUserName}
          startQuiz={startQuiz}
        />
      )}
    </div>
  );
}

export default App;
