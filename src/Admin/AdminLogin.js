import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = ({onMessageChange}) => {
  const [adminDetails, changeDetails] = useState({
    email: '',
    password: '',
  });
  const [result, changeResult] = useState({
    Resultemail: '',
    Resultpassword: '',
    error: null,
  });
  const navigate = useNavigate();

  //
  useEffect(() => {
    onMessageChange(adminDetails.email);
  }, [adminDetails]);
  //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${adminDetails.email}`);
        if (!response.ok) {
          if (response.status === 404) {
            changeResult({
              Resultemail: '',
              Resultpassword: '',
              error: 'User not found',
            });
          } else {
            throw new Error(`HTTP error ${response.status}`);
          }
        } else {
          const data = await response.json();
          changeResult({
            Resultemail: data.companyemail,
            Resultpassword: data.password,
            error: null,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        changeResult({
          Resultemail: '',
          Resultpassword: '',
          error: 'Error fetching data',
        });
      }
    };

    if (adminDetails.email) {
      fetchData();
    }
  }, [adminDetails.email]);

  function handleChange(event) {
    event.preventDefault();
    changeDetails((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(adminDetails);
    console.log(result);

    if (result.error) {
      console.log(result.error);
    } else if (adminDetails.password === result.Resultpassword && adminDetails.email === result.Resultemail) {
      navigate('UploadType');
      console.log('Logged in');
      console.log(adminDetails.email);
      //
      
      

      
      //
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Talent-Verify</h1>
      <small>Storage of company Information</small>
      <h1>Login</h1>
      <form onSubmit={handleLogin} onChange={handleChange}>
        <label>Email:</label>
        <input type="email" placeholder="email" name="email" required />
        <label>Password:</label>
        <input type="password" placeholder="password" name="password" required />
        {result.error && <div style={{ color: 'red' }}>{result.error}</div>}
        <button type="submit" >Login</button>
        <Link to={'/EmployerRegistration'}>Create Account</Link>
      </form>
    </div>
  );
};

export default AdminLogin;