import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UploadForm.css';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError(null); // Clear any previous errors when a new file is selected
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file.'); // Display error if no file selected
      return;
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('File type not supported. Please upload a PDF or an image (jpeg, jpg, png).');
      return;
    }

    setLoading(true); // Show loader

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Assuming the response data contains the processed data
      const responseData = response.data;

      // Navigate to display page and pass response data as state
      navigate('/display', { state: { responseData } });
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.'); // Display error message received from server
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload PDF or Image</h2>
      <label htmlFor="file-upload" className="upload-label">
        Choose File
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="upload-input"
        id="file-upload"
        accept=".pdf,.jpeg,.jpg,.png" 
        required 
      />
      <button onClick={handleUpload} className="upload-button" >
        Submit
      </button>
      {error && <div className="error">{error}</div>}
      {loading && <div className="loader">Loading...</div>} 
    </div>
  );
};

export default UploadForm;
