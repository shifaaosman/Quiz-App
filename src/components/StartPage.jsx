import React, { useState } from 'react';

function StartPage({ startQuiz, setUserName }) {
  const [name, setName] = useState('');

  const handleStartClick = () => {
    setUserName(name);  // Set the user's name before starting
    startQuiz();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-8 tracking-wide">
        Welcome to the Quiz App
      </h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 mb-4 rounded-lg shadow-md"
      />
      <button
        onClick={handleStartClick}
        className="px-8 py-4 bg-green-600 text-white rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-2xl"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartPage;
