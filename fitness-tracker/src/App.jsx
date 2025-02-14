import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import WorkoutList from "./components/WorkoutList";
import Dashboard from "./components/Dashboard";
import BMICalculator from "./components/BMICalculator";
import "./index.css";
import "./animations.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth setUser={setUser} />} />
          <Route path="/workouts" element={<WorkoutList user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/bmi" element={<BMICalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
