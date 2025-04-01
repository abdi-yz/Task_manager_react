import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css"; // Make sure to import the updated CSS here

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Toggle task completion
  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Delete a task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="app-container">
      {/* Form Container */}
      <div className="form-container">
        <h1>Task Management</h1>
        <TaskForm addTask={addTask} />
      </div>

      {/* Task List Container */}
      <div className="task-list-container">
        <h2 style={{ marginBottom: "10px" }}>Task List</h2>
        <div className="task-boxes">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
