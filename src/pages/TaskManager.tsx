import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axios_instance";

interface Task {
  id: string;
  title: string;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get("/api/tasks");
        setTasks(response.data);
      } catch (err: any) {
        console.error("Failed to fetch tasks:", err.response?.data || err.message);
        setError("Failed to fetch tasks. Please try again.");
      }
    };

    fetchTasks();
  }, []);

  // Add a new task
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/tasks", { title: newTask });
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setNewTask("");
    } catch (err: any) {
      console.error("Failed to add task:", err.response?.data || err.message);
      setError("Failed to add task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete a task
  const handleDeleteTask = async (taskId: string) => {
    setError("");
    setLoading(true);

    try {
      await axiosInstance.delete(`/api/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err: any) {
      console.error("Failed to delete task:", err.response?.data || err.message);
      setError("Failed to delete task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Task Manager</h2>
      <form onSubmit={handleAddTask} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          required
          style={{ width: "70%", padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "8px 20px" }}>
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <span>{task.title}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;