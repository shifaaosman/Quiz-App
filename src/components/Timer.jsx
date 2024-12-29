import { useState, useEffect } from "react";

function Timer({ onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout(); // Call the onTimeout function when the timer ends
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  return <div className="text-lg font-bold">{timeLeft}s</div>;
}

export default Timer;
