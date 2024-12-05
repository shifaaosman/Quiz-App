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
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizCompleted(true);

    // Save score to leaderboard
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name: 'Player', score: finalScore });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  };

  return (
    <div className="App">
      {!quizStarted && !quizCompleted && <StartPage startQuiz={startQuiz} />}
      {quizStarted && !quizCompleted && (
        <Quiz questions={questions} onComplete={finishQuiz} />
      )}
      {quizCompleted && <Leaderboard />}
    </div>
    
  );
}

export default App;
