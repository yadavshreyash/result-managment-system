import React, { useState } from "react";
import axios from "axios";

const StudentResults = () => {
  const [studentId, setStudentId] = useState("");
  const [results, setResults] = useState(null);

  const fetchResults = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/results/${studentId}`);
      setResults(data);
    } catch (error) {
      alert("Student not found");
    }
  };

  return (
    <div>
      <h1>Student Results</h1>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={fetchResults}>Search</button>
      {results && (
        <div>
          <p>Attendance: {results.attendanceMarks}</p>
          <p>Project Review: {results.projectReviewMarks}</p>
          <p>Total: {results.totalMarks}</p>
        </div>
      )}
    </div>
  );
};

export default StudentResults;