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

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    const newTasks = tasks.concat({
      id: Math.random().toString(36).substring(7),
      title: newTask,
      completed: false,
    });
    setTasks(newTasks);
    setNewTask('');
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
      <input
        type="text"
        placeholder="Add task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskList;
