import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin= () => {
    const[em, changeEm] = React.useState("caltech@gmail.com")

    const[result, chnageResult] = React.useState({
        Resultemail:'',
        Resultpassword:''
    })

    
    const navigate = useNavigate();
    const[adminDetails, changeDetails] = React.useState({
        email:"",
        password:""
    })
    console.log(adminDetails);

    //use effect
    React.useEffect(function() {
        console.log(em);
      
        fetch(`http://localhost:8080/${em}`)
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            chnageResult(function(prev) {
              return {
                Resultemail: data.companyEmail,
                Resultpassword: data.password
               
              };
            });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Handle the error, e.g., display an error message to the user
          });
      }, [em]);

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

    const handleLogin = (event) => {
        event.preventDefault();
        //
        changeEm(function(prev){
            return adminDetails.email
        })

        console.log(result.Resultemail);
        console.log("Loged");
        //
        if((adminDetails.password ===result.Resultpassword) &&(adminDetails.email===result.Resultemail)){
            navigate('UploadType');
           

        }
        // Logic for handling login action
        

        
        //end of logic
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
