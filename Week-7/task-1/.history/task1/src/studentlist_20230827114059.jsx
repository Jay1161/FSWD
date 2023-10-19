import React from 'react';
import StudentList from './StudentList'; // Assuming the component is in a separate file

const App = () => {
  const students = [
    { id: 1, name: 'Alice', marks: 45 },
    { id: 2, name: 'Bob', marks: 28 },
    { id: 3, name: 'Charlie', marks: 18 },
    // ... other student objects
  ];

  return (
    <div>
      <h1>Student Information</h1>
      <StudentList students={students} />
    </div>
  );
};

export default App;
