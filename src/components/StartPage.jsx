import React from 'react';

function StartPage({ startQuiz }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-8 tracking-wide">
        Welcome to the Quiz App
      </h1>
      <p className="text-xl text-white mb-8 max-w-lg text-center px-6">
        Test your knowledge across multiple topics with exciting quizzes. Ready to challenge yourself?
      </p>
      <button
        onClick={startQuiz}
        className="px-8 py-4 bg-green-600 text-white rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-2xl"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartPage;
