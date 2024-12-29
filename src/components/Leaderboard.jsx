function Leaderboard({ resetQuiz }) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center py-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Leaderboard</h2>
        <ul className="space-y-4">
          {leaderboard.length === 0 ? (
            <li className="text-xl text-gray-500 text-center">No scores yet</li>
          ) : (
            leaderboard
              .sort((a, b) => b.score - a.score)
              .map((entry, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-between items-start px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex justify-between w-full">
                    <span className="text-lg font-semibold">{entry.name}</span>
                    <span className="text-lg">{entry.score}</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">Correct Answers: {entry.correctAnswers}</p>
                    <p className="text-sm">Incorrect Answers: {entry.incorrectAnswers}</p>
                  </div>
                </li>
              ))
          )}
        </ul>
        <button
          onClick={resetQuiz}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Back to Start Page
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
