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

  return (
    <div className='signup-container'>
        <h1>Talent-Verify</h1>
        <h1 >Please Select Upload Type :</h1>
        <button className='divs' onClick={Bulky}> Bulk Upload</button>
        <button onClick={Single} className='divs'> Single Upload</button>
        <button onClick={Search} className='divs'>Search</button>
    </div>
  )
}
