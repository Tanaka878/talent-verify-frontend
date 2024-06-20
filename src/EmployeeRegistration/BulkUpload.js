import React, { useState ,useNavigate} from 'react';

const BulkUpload = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigation= useNavigate();

    function NavigateBack(){
        navigation('/UploadType');

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

      const response = await fetch('/api/upload-csv', {
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
    <div>
      <h2>CSV Uploader</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload CSV'}
        </button>
        <button onClick={NavigateBack}>Back</button>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default BulkUpload;






