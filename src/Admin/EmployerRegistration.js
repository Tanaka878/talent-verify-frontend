import React from 'react'

const EmployerRegistration = () => {

    const [companyDetails, setCompanyDetails] = React.useState({
        companyName: '',
        registrationDate: '',
        address: '',
        phoneNumber: '',
        companyemail: '',
        departments: '',
        numberofemployees: '',
        confirmpassword: '',
        password: ''
      });

  
    console.log(companyDetails);

    function handleChange(event){
        event.preventDefault();

        setCompanyDetails(function(prevData){
            return{
                ...prevData,
                [event.target.name]:event.target.value
            };
        })
        //
       
    }

    const handleSignUp = (event) => {
        event.preventDefault();
      
        fetch('http://localhost:8080/register-company', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(companyDetails)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          // Handle the response data from the server here
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occurred during the fetch process
        });
      };
      


  return (
    <div>
        <h1>Talent -Verify</h1>

<h1>Sign Up</h1> 
            <form onSubmit={handleSignUp} onChange={handleChange}>
                
                <input type="text" placeholder='Company Name' name='companyName'required />

                              
                <label>Registration Date:</label>
                <input type="date" placeholder='RegistationDate' name='registrationDate' required />

                
                <input type="text"  placeholder='Address Of Company' name='address'required />

                
                <input type="text" placeholder='Contact Number' name='phoneNumber' required />

               
                <input type="email" placeholder='Email of Company' name='companyemail' required />

                
                <input type="text"  placeholder='List of Departments' name='departments' required/>

                
                <input type="number" placeholder='Number of Employees' name='numberofemployees' required/>

                
                <input type="password"  placeholder='Enter New Password' name='password' required />

                
                <input type="password" placeholder='Confirm Password' name='confirmpassword' required />

                <button type="submit">Sign Up</button>
            </form>

    </div>
  )
}

export default EmployerRegistration