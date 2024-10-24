import React, { useState } from 'react';

const UploadAttendance = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Handle file submission logic
      console.log(file);
    }
  };

  return (
    <div className="upload-container">
      <div className="card shadow-sm p-4">
        <h2>Upload Class Picture</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select a Picture</label>
            <input type="file" className="form-control" onChange={handleFileUpload} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadAttendance;
