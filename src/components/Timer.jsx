
import { useState, useEffect } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return <div className="text-lg font-bold">{timeLeft}s</div>;
}

export default Timer;
