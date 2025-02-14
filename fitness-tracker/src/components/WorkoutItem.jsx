import { useState } from "react";
import Timer from "./Timer";

export default function WorkoutItem({ workout, onComplete, isCompleted }) {
  const [isRunning, setIsRunning] = useState(false);

  const handleComplete = () => {
    onComplete(workout.id);
  };

  return (
    <div className="workout-item">
      <h3>{workout.name}</h3>
      {!isCompleted ? (
        <>
          <Timer
            duration={workout.duration}
            onComplete={handleComplete}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Pause" : "Start"}
          </button>
        </>
      ) : (
        <p>✅ Completed</p>
      )}
    </div>
  );
}
