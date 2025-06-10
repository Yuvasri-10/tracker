import React from 'react';
import TaskTracker from './components/TaskTracker';
import MonthlyStats from './components/MonthlyStats';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>AceIt: Monthly Productivity Tracker</h1>
      <MonthlyStats />
      <TaskTracker />
    </div>
  );
}

export default App;
