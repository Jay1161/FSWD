import React, { useState, useEffect } from 'react';

const StudentsList = () => {
  const [students, setStudents] = useState([
    { name: 'Jay Vaja', marks: 90 },
    { name: 'Rushi Butt', marks: 20 },
    { name: 'Peter Smith', marks: 10 },
  ]);

  const filteredStudents = students.filter((student) => student.marks < 35);

  return (
    <ul>
      {filteredStudents.map((student) => (
        <li key={student.id}>
          {student.name} - {student.marks}
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
