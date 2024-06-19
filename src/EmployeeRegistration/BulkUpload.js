import React from 'react'
import { useNavigate } from 'react-router-dom'

const BulkUpload = () => {
  //dealing with convesrion
function Conversion(){
  const csvToJSON= require('csvtojson');
  const fileSystem = require('fs');

  csvToJSON.fromFile("").then(source=>{
    console.log(source)
  })

}
  


    const navigation= useNavigate();

    function NavigateBack(){
        navigation('/UploadType');

    }
    
  return (

    <div className='signup-container'>
        <form>
            <h1>File Upload</h1>
            <input type='file' name='file' accept='.csv'/>
            <button type="submit">Submit</button>
            <button onClick={NavigateBack}>Back</button>


        </form>
      
    </div>
  )
}

export default BulkUpload
