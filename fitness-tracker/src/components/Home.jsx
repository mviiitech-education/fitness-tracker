import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Fitness Tracker</h1>
      <p>
        Track your workouts, stay fit, and achieve your fitness goals with our
        easy-to-use app.
      </p>
      <h2>Benefits of Regular Workouts:</h2>
      <ul>
        <li>Improves cardiovascular health</li>
        <li>Boosts mental health and mood</li>
        <li>Increases strength and flexibility</li>
        <li>Helps in weight management</li>
      </ul>
      <Link to="/auth" className="cta-button">
        Get Started
      </Link>
    </div>
  );
}
