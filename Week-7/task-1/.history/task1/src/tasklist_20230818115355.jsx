import React, { useState } from 'react';

function TaskListPage() {
  const [showCompleted, setShowCompleted] = useState(true);

  const tasks = [
    {
      id: 1,
      title: 'Buy groceries',
      completed: true,
    },
    {
      id: 2,
      title: 'Clean the house',
      completed: false,
    },
    {
      id: 3,
      title: 'Go for a run',
      completed: true,
    },
    {
      id: 4,
      title: 'Read a book',
      completed: false,
    },
  ];

  return (
    <div>
      <h1>Task List</h1>
      <label>
        Show completed tasks:
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
      </label>
      <ul>
        {tasks.map(task => {
          if (showCompleted || !task.completed) {
            return (
              <li
                key={task.id}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.title}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default TaskListPage;
