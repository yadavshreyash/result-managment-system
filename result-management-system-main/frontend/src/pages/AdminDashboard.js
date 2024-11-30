import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/upload/marks", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!");
    } catch (error) {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Marks</button>
    </div>
  );
};

export default AdminDashboard;