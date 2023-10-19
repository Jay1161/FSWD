import React, { useState, useEffect } from "react";

const StudentList = ({ students }) => {
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    setFilteredStudents(students.filter((student) => student.marks < 35));
  }, [students]);

  return (
    <ul>
      {filteredStudents.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
};

export default StudentList;