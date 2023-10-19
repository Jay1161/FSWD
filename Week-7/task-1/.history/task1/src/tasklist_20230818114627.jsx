import React, { useState } from "react";
import Task from "./Task";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskCompleted = (task) => {
    setTasks(tasks.map((t) => {
      return t.id === task.id ? { ...t, completed: true } : t;
    }));
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onCompleted={markTaskCompleted} onDelete={deleteTask} />
        ))}
      </ul>
      <input type="text" placeholder="Add a new task" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default ToDoList;
