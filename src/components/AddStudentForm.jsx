import React, { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || score === '') return;
    
    onAddStudent({ name, score: Number(score) });
    setName('');
    setScore('');
  };

  return (
    <div className="terminal-box">
      <div className="box-header">
        <span className="dot cyan-dot"></span> REGISTER STUDENT
      </div>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
        <button type="submit">+ ADD</button>
      </form>
    </div>
  );
}

export default AddStudentForm;