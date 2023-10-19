import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      name: "Do laundry",
      completed: true,
    },
  ]);

  const handleCreateTask = () => {
    const newTask = {
      id: Math.random().toString(36).substring(7),
      name: "",
      completed: false,
    };

    setTasks([...tasks, newTask]);
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
      <input type="text" placeholder="Enter a new task" />
      <button onClick={handleCreateTask}>Create Task</button>
      <ul>
        {renderTasks()}
      </ul>
    </div>
  );
};

export default TaskList;
