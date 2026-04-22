import React from 'react';

function Stats({ students }) {
  const total = students.length;
  const passed = students.filter(student => student.score >= 40).length;
  // Calculate average, avoid dividing by zero if the list is empty
  const avg = total > 0 ? Math.round(students.reduce((acc, curr) => acc + curr.score, 0) / total) : 0;

  return (
    <div className="stats-container">
      <div className="stat-box">
        <div className="stat-label">TOTAL</div>
        <div className="stat-value">{total}</div>
      </div>
      <div className="stat-box">
        <div className="stat-label">PASSED</div>
        <div className="stat-value">{passed}</div>
      </div>
      <div className="stat-box">
        <div className="stat-label">AVG SCORE</div>
        <div className="stat-value">{avg}</div>
      </div>
    </div>
  );
}

export default Stats;