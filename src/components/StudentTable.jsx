import React from 'react';
import StudentRow from './StudentRow';

function StudentTable({ students, onUpdateScore, onDeleteStudent }) {
  return (
    <div className="terminal-box">
      <div className="box-header flex-between">
        <span>STUDENT RECORDS</span>
        <span className="entry-count">{students.length} entries</span>
      </div>
      <div className="table-responsive">
        <table className="student-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>SCORE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <StudentRow
                key={student.id}
                student={student}
                onUpdateScore={onUpdateScore}
                onDeleteStudent={onDeleteStudent}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;