import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const BulkUpload = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  function NavigateBack(){
    navigate('/UploadType');
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/bulk-upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log('CSV file uploaded successfully:', data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error uploading CSV file:', error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>CSV Uploader</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%' }}>
      <input type="file" onChange={handleFileChange} style={{ 
      fontSize: '1.5rem', 
      padding: '1rem', 
      marginBottom: '1rem', 
      width: '100%' 
    }} />
        <button type="submit" disabled={isLoading} style={{ fontSize: '1.5rem', padding: '1rem 2rem', marginBottom: '1rem' }}>
          {isLoading ? 'Uploading...' : 'Upload CSV'}
        </button>
        <button onClick={NavigateBack} style={{ fontSize: '1.5rem', padding: '1rem 2rem', marginBottom: '1rem' }}>Back</button>
      </form>
      {error && <div style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Error: {error}</div>}
    </div>
  );
};

export default BulkUpload;






