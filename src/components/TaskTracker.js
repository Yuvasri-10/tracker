import React, { useState, useEffect } from 'react';

const TaskTracker = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    document.title = `You have ${tasks.length} tasks`;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setCompletedCount(tasks.filter(task => task.completed).length);
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === '') return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <input 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li 
            key={task.id} 
            onClick={() => toggleComplete(task.id)} 
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>

      <p>Total: {tasks.length}, Completed: {completedCount}</p>
    </div>
  );
};

export default TaskTracker;
