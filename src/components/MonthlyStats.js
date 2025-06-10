import React, { useState, useEffect } from 'react';

const MonthlyStats = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    setDaysLeft(end.getDate() - now.getDate());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCompletion(74); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Monthly Stats</h2>
      <p>Days left this month: {daysLeft}</p>
      <p>Productivity Completion: {completion}%</p>
    </div>
  );
};

export default MonthlyStats;
