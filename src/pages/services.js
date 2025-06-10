import { useEffect, useState } from 'react';
import Link from 'next/link';

const defaultTasks = {
  professional: [
    'Finish project report',
    'Attend team meeting',
    'Send client follow-up email',
    'Review quarterly goals'
  ],
  health: [
    'Go for a 30-minute run',
    'Drink 8 glasses of water',
    'Stretch for 10 minutes',
    'Book dentist appointment',
    'Prepare healthy meals for the week'
  ],
  lifegoals: [
    'Plan next week’s schedule',
    'Read a chapter of a personal development book',
    'Meditate for 15 minutes',
    'Practice a new skill or hobby',
    'Set monthly savings goal'
  ],
  finance: [
    'Review monthly budget',
    'Pay credit card bill',
    'Track daily expenses',
    'Research investment options',
    'Organize tax documents'
  ],
  selfcare: [
    'Meditate for 10 minutes',
    'Take a relaxing bath',
    'Read a favorite book',
    'Journal thoughts and feelings',
    'Listen to calming music'
  ],
  entertainment: [
    'Watch a movie',
    'Call a friend for a chat',
    'Play a board game',
    'Listen to a podcast',
    'Try a new recipe'
  ]
};

const STORAGE_KEY_BASE = 'AceItMonthlyTasks_';

function getDaysInMonth(monthStr) {
  const [year, month] = monthStr.split('-').map(Number);
  return new Date(year, month, 0).getDate();
}

function getStorageKey(month) {
  return STORAGE_KEY_BASE + month;
}

function initializeMonthlyTasks(tasksByCategory, days) {
  let result = {};
  for (const category in tasksByCategory) {
    result[category] = {};
    tasksByCategory[category].forEach(task => {
      result[category][task] = new Array(days).fill(false);
    });
  }
  return result;
}

export default function PlannerPage() {
  const [currentMonth, setCurrentMonth] = useState('2025-01');
  const [tasks, setTasks] = useState({});
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth('2025-01'));

  useEffect(() => {
    const days = getDaysInMonth(currentMonth);
    setDaysInMonth(days);
    const saved = localStorage.getItem(getStorageKey(currentMonth));
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        for (const cat in parsed) {
          for (const task in parsed[cat]) {
            if (parsed[cat][task].length !== days) {
              parsed[cat][task] = new Array(days).fill(false);
            }
          }
        }
        setTasks(parsed);
        return;
      } catch {}
    }
    setTasks(initializeMonthlyTasks(defaultTasks, days));
  }, [currentMonth]);

  function saveTasks(updatedTasks) {
    localStorage.setItem(getStorageKey(currentMonth), JSON.stringify(updatedTasks));
  }

  function addTask(taskText, category) {
    if (!taskText.trim()) return;
    if (tasks[category]?.[taskText]) return;
    const updated = { ...tasks };
    if (!updated[category]) updated[category] = {};
    updated[category][taskText] = new Array(daysInMonth).fill(false);
    setTasks(updated);
    saveTasks(updated);
  }

  function toggleDay(category, task, day) {
    const updated = { ...tasks };
    updated[category][task][day] = !updated[category][task][day];
    setTasks(updated);
    saveTasks(updated);
  }

  function deleteTask(category, task) {
    const updated = { ...tasks };
    delete updated[category][task];
    setTasks(updated);
    saveTasks(updated);
  }

  return (
    <div>
      <Link href="/" className="btn-home">Home</Link>
      <div className="planner-header">
        <label htmlFor="monthSelect">Select Month:</label>
        <select id="monthSelect" value={currentMonth} onChange={e => setCurrentMonth(e.target.value)}>
          {[...Array(12).keys()].map(i => {
            const val = `2025-${String(i + 1).padStart(2, '0')}`;
            return <option key={val} value={val}>{new Date(2025, i).toLocaleString('default', { month: 'long' })}</option>;
          })}
        </select>
      </div>

      <h2>Tasks by Category</h2>

      <div id="input-area">
        <input id="taskInput" placeholder="Add a new task..." />
        <select id="categorySelect">
          {Object.keys(defaultTasks).map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
        </select>
        <button onClick={() => addTask(document.getElementById('taskInput').value, document.getElementById('categorySelect').value)}>Add Task</button>
      </div>

      <div id="categories">
        {Object.entries(tasks).map(([cat, taskObj]) => (
          <div className="category" key={cat} id={cat}>
            <h3>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
            <ul>
              {Object.entries(taskObj).map(([task, days], idx) => (
                <li key={idx}>
                  <div className="task-row">
                    <button className="delete-task-btn" title={`Delete task "${task}"`} onClick={() => deleteTask(cat, task)}>✖</button>
                    <div className="task-label">{task}</div>
                    <div className="day-grid">
                      {days.map((done, i) => (
                        <div className="day-cell" key={i}>
                          <span className="day-num" title={`Day ${i + 1}`}>{i + 1}</span>
                          <input type="checkbox" checked={done} onChange={() => toggleDay(cat, task, i)} title={`Mark task "${task}" completed on day ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
