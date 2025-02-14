import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Fitness Tracker</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/stats">Stats</Link>
      </nav>
    </header>
  );
}
