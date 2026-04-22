import React, { useState } from 'react';

function StudentRow({ student, onUpdateScore, onDeleteStudent }) {
  const [inputScore, setInputScore] = useState(student.score);
  const isPass = student.score >= 40;

  const handleUpdate = () => {
    onUpdateScore(student.id, inputScore);
  };

  return (
    <tr className={isPass ? 'row-pass' : 'row-fail'}>
      <td className="student-name">{student.name}</td>
      <td className="student-score">{student.score}</td>
      <td>
        <span className={isPass ? 'badge-pass' : 'badge-fail'}>
          <span className="dot"></span> {isPass ? 'PASS' : 'FAIL'}
        </span>
      </td>
      <td>
        <div className="update-controls">
          <input
            type="number"
            value={inputScore}
            onChange={(e) => setInputScore(e.target.value)}
          />
          <button onClick={handleUpdate}>SAVE</button>
          {/* NEW: Delete Button */}
          <button 
            className="delete-btn" 
            onClick={() => onDeleteStudent(student.id)}
          >
            DELETE
          </button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;