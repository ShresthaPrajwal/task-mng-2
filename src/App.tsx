import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskManager from "./pages/TaskManager";
import Home from "./pages/Home"; // Import the Home page
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the register page */}
        <Route path="/register" element={<Register />} />

        {/* Route for the task manager page */}
        <Route path="/tasks" element={<TaskManager />} />

        {/* Default route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
