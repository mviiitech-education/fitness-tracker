export default function Dashboard() {
  const workoutData = JSON.parse(localStorage.getItem("workoutData"));

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {workoutData ? (
        <div>
          <p>Total Workouts: {workoutData.totalWorkouts}</p>
          <p>Total Duration: {workoutData.totalDuration} mins</p>
          <p>Total Calories Burned: {workoutData.totalCalories} kcal</p>
          <p>Date: {workoutData.date}</p>
        </div>
      ) : (
        <p>No workout data available.</p>
      )}
    </div>
  );
}
