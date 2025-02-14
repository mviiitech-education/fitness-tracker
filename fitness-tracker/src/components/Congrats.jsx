import { useNavigate } from "react-router-dom";

export default function Congrats() {
  const navigate = useNavigate();

  return (
    <div className="congrats">
      <h1>Congratulations! 🎉</h1>
      <p>You've completed all your workouts for today.</p>
      <button onClick={() => navigate("/dashboard")}>View Dashboard</button>
    </div>
  );
}
