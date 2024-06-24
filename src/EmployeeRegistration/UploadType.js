import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UploadType = () => {
    const navigate = useNavigate();

    function Bulky(){
        navigate('/BulkUpload');
    }

    function Single(){
        navigate('/SingleUpload');
    }

    function Search(){
      navigate('/SearchComponent');
    }

    function Update(){
      navigate('/UpdateDetails');
    }

  return (
    <div className='signup-container'>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Talent-Verify</h1>
        <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Please Select Upload Type:</h1>
        <button className='divs' onClick={Bulky} style={{ fontSize: '1.5rem', padding: '1rem 2rem', marginBottom: '1rem' }}>Bulk Upload</button>
        <button onClick={Single} className='divs' style={{ fontSize: '1.5rem', padding: '1rem 2rem', marginBottom: '1rem' }}>Single Upload</button>
        <button onClick={Search} className='divs' style={{ fontSize: '1.5rem', padding: '1rem 2rem', marginBottom: '1rem' }}>Search</button>
        <button onClick={Update} className='divs' style={{ fontSize: '1.5rem', padding: '1rem 2rem', marginBottom: '1rem' }}>Update Details</button>
    </div>
  )
}