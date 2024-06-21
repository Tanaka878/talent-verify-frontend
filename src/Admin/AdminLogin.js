import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [adminDetails, changeDetails] = useState({
    email: '',
    password: '',
  });
  const [result, changeResult] = useState({
    Resultemail: '',
    Resultpassword: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${adminDetails.email}`);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        changeResult({
          Resultemail: data.companyemail,
          Resultpassword: data.password,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user
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
    //console.log(adminDetails);
    console.log(result);

    if (adminDetails.password === result.Resultpassword && adminDetails.email === result.Resultemail) {
      navigate('UploadType');
      console.log('Logged in');
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
        <button type="submit">Login</button>
        <Link to={'/EmployerRegistration'}>Create Account</Link>
      </form>
    </div>
  );
};

export default AdminLogin;