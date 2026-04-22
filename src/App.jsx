import React, { useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman', score: 78 },
    { id: 2, name: 'Riya', score: 45 },
    { id: 3, name: 'Karan', score: 90 },
    { id: 4, name: 'Neha', score: 32 },
    { id: 5, name: 'Ayush', score: 90 },
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  const updateScore = (id, updatedScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: Number(updatedScore) } : student
    ));
  };

  // NEW: Function to delete a student by their ID
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm onAddStudent={addStudent} />
      <Stats students={students} />
      {/* Pass the new delete function down to the table */}
      <StudentTable 
        students={students} 
        onUpdateScore={updateScore} 
        onDeleteStudent={deleteStudent} 
      />
    </div>
  );
}

export default App;