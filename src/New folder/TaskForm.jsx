import React, { useState } from "react";
import "./TaskForm.css";
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // unique id for each task
      title,
      description,
      dueDate,
      completed,
    };
    addTask(newTask);
    // Clear form fields after adding
    setTitle("");
    setDescription("");
    setDueDate("");
    setCompleted(false);
  }

  return (
    <form className ="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <label>
        Completed
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
