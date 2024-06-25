
import './App.css';
import React from 'react';
import { useState } from 'react';
import  {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import EmployerRegistration from './Admin/EmployerRegistration';
import BulkUpload from './EmployeeRegistration/BulkUpload';
import { UploadType } from './EmployeeRegistration/UploadType';
import { SingleUpload } from './EmployeeRegistration/SingleUpload';
import SearchComponent from './Admin/SearchComponent';
import UpdateDetails from './Admin/UpdateDetails';

function App() {
  const [message, setMessage] = useState('');

 
    
  
    const handleMessageChange = (newMessage) => {
      setMessage(newMessage);
    };
  
    console.log('FRom App',message)

 

  return (
    <div>

      <Router>
        <Routes>

          <Route exact path='/' element={<AdminLogin onMessageChange={handleMessageChange}/>}/>
          <Route exact path='EmployerRegistration' element={<EmployerRegistration/>}/>
          <Route exact path='/BulkUpload' element={<BulkUpload/>}/>
          <Route exact path='/UploadType' element={<UploadType/>}/>
          <Route exact path='/SingleUpload' element={<SingleUpload newMessage={message}/>}/>
          <Route exact path='/SearchComponent' element={<SearchComponent/>}/>
          {console.log(message)}
          <Route exact path='/UpdateDetails' element={<UpdateDetails newMessage={message}/>}/>
        </Routes>
      </Router>
    </div>
    
    
  );
}

export default App
