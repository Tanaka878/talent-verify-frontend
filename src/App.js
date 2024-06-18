
import './App.css';
import React from 'react';
import  {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import EmployerRegistration from './Admin/EmployerRegistration';
import BulkUpload from './EmployeeRegistration/BulkUpload';
import { UploadType } from './EmployeeRegistration/UploadType';
import { SingleUpload } from './EmployeeRegistration/SingleUpload';

function App() {
  return (
    <div>

      <Router>
        <Routes>

          <Route exact path='/' element={<AdminLogin/>}/>
          <Route exact path='EmployerRegistration' element={<EmployerRegistration/>}/>
          <Route exact path='/BulkUpload' element={<BulkUpload/>}/>
          <Route exact path='/UploadType' element={<UploadType/>}/>
          <Route exact path='/SingleUpload' element={<SingleUpload/>}/>
        </Routes>
      </Router>
    </div>
    
    
  );
}

export default App;
