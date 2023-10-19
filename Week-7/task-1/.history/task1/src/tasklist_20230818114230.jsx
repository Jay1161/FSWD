import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Buy groceries',
      completed: false,
    },
    {
      id: 2,
      title: 'Do laundry',
      completed: true,
    },
    {
      id: 3,
      title: 'Clean the house',
      completed: false,
    },
  ]);

  const handleCompleteTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = true;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              onClick={() => handleCompleteTask(task.id)}
              disabled={task.completed}
            >
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
