import { useState } from "react";
import WorkoutItem from "./WorkoutItem";

const workouts = [
  { id: 1, name: "Push-ups", duration: 30, calories: 50 },
  { id: 2, name: "Squats", duration: 45, calories: 60 },
  { id: 3, name: "Plank", duration: 60, calories: 40 },
  { id: 4, name: "Lunges", duration: 30, calories: 55 },
  { id: 5, name: "Jumping Jacks", duration: 45, calories: 70 },
];

export default function WorkoutList() {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const handleComplete = (id) => {
    setCompletedWorkouts([...completedWorkouts, id]);
  };

  return (
    <div className="workout-list">
      <h2>Your Workouts</h2>
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onComplete={handleComplete}
          isCompleted={completedWorkouts.includes(workout.id)}
        />
      ))}
    </div>
  );
}
