import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin= () => {
    const navigate = useNavigate();
    const[adminDetails, changeDetails] = React.useState({
        email:"",
        password:""
    })
    console.log(adminDetails);

    //function to handle change i state
    function handleChange(event){
        event.preventDefault()
        changeDetails(function(prevData){
            return{
                ...prevData,
                [event.target.name]:event.target.value

            };
        })
        
    }

    const handleLogin = () => {
        if((adminDetails.password ==='root') &&(adminDetails.email==='email@gmail.com')){
            navigate('UploadType');

        }
        // Logic for handling login action
    };

    return (
        <div className="login-container">
        <h1>Talent-Verify</h1>
        <small>Storage of company Information</small>
            <h1>Login</h1>
            <form onSubmit={handleLogin} onChange={handleChange}>
                <label>Email:</label>
                <input type="email" placeholder='email' name='email'  required />
                <label>Password:</label>
                <input type="password" placeholder='password' name='password' required />
                <button type="submit">Login</button>
                <Link to={'/EmployerRegistration'}>Create Account</Link>
            </form>
        </div>
    );
};

export default AdminLogin;
