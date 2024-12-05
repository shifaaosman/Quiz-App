
function Leaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index} className="flex justify-between">
            <span>{entry.name}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
