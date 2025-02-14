import { useEffect, useState } from "react";

export default function Timer({
  duration,
  onComplete,
  isRunning,
  setIsRunning,
}) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onComplete]);

  return (
    <div className="timer">
      <h1>{timeLeft}s</h1>
    </div>
  );
}
