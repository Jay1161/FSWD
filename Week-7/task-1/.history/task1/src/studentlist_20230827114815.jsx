import React, { useState, useEffect } from 'react';

const StudentsList = () => {
  const [students, setStudents] = useState([
    { name: 'Jay Vaja', marks: 90 },
    { name: 'ABC', marks: 34 },
    { name: 'XYZ', marks: 10 },
  ]);

  const filteredStudents = students.filter((student) => student.marks < 35);

  return (
    <ul>
        <h1>Students List who got less than 35</h1>
      {filteredStudents.map((student) => (
        <li key={student.id}>
          {student.name} - {student.marks}
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
