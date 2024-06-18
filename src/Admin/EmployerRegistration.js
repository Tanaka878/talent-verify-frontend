import React from 'react'

const EmployerRegistration = () => {

    const[companyDetails, changeCompanyDetails] = React.useState({
        companyName:"",
        regDate:"",
        address:"",
        phoneNumber:"",
        companyEmail:"",
        departments:"",
        numberOfEmployees:"",
        contactPerson:"",
        password:"",
        confirmPassword:""      

    })

    console.log(companyDetails);

    function handleChange(event){
        event.preventDefault();

        changeCompanyDetails(function(prevData){
            return{
                ...prevData,
                [event.target.name]:event.target.value
            };
        })
    }

    function handleSignUp(){

    }
  return (
    <div>
        <h1>Talent -Verify</h1>

<h1>Sign Up</h1>
            <form onSubmit={handleSignUp} onChange={handleChange}>
                
                <input type="text" placeholder='Company Name' name='companyName'required />

                              
                <label>Registration Date:</label>
                <input type="date" placeholder='RegistationDate' name='regDate' required />

                
                <input type="text"  placeholder='Address Of Company' name='address'required />

                
                <input type="text" placeholder='Contact Number' name='phoneNumber' required />

               
                <input type="email" placeholder='Email of Company' name='companyEmail' required />

                
                <input type="text"  placeholder='List of Departments' name='departments'/>

                
                <input type="number" placeholder='Number of Employees' name='numberOfEmployees' />

                
                <input type="text" placeholder='Contact Person' required  name='contactPerson'/>

                
                <input type="password"  placeholder='Enter New Password' name='password' required />

                
                <input type="password" placeholder='Confirm Password' name='confirmPassword' required />

                <button type="submit">Sign Up</button>
            </form>

    </div>
  )
}

export default EmployerRegistration