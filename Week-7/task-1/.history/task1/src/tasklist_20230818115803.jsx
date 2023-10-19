import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Buy TV",
      completed: false,
    },
    {
      id: 2,
      name: "Do laundry",
      completed: true,
    },
  ]);

  const [newTaskName, setNewTaskName] = useState(""); // State for new task input

  const handleCreateTask = () => {
    const newTask = {
      id: Math.random().toString(36).substring(7),
      name: newTaskName, // Use the input value for the task name
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskName(""); // Clear the input field after creating the task
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const renderTasks = () => {
    return tasks.map((task) => (
      <li key={task.id}>
        {task.name}
        {task.completed ? " (Completed)" : ""}
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </li>
    ));
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName} // Bind input value to state
        onChange={(e) => setNewTaskName(e.target.value)} // Update input value
      />
      <button onClick={handleCreateTask}>Create Task</button>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default TaskList;
