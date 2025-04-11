import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the App</h1>
      <p>Select an option below to navigate:</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Register
        </button>
        <button
          onClick={() => navigate("/tasks")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#ffc107",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Task Manager
        </button>
      </div>
    </div>
  );
};

export default Home;