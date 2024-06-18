import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SingleUpload = () => {
    const navigate = useNavigate();
    const[employeeDetails, changeDetails] = React.useState({
        name:'',
        surname:'',
        email:'',
        department:'',
        roles:'',
        startDate:'',
        endDate:'',
        tel:''
    });

    console.log(employeeDetails);

    function handleChange(event){
        event.preventDefault();
        changeDetails(function(prevData){
            return{
                ...prevData,
                [event.target.name]:event.target.value

            }
           

        })
        
    }

    function handleSubmit(){

    }

    function HandleNavigation(){
        navigate('/UploadType');
    }
    
  return (
    <div className='signup-container'>
        <h1>Talent-Verify</h1>
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='name' required/>

            <input type='text' placeholder='Surname' name='surname' required/>

            <input type='email' placeholder='example@gmail.com' name='email'required/>

            <input type='text' placeholder='Department' name='department' required/>

            <input type='text' placeholder='Roles/Duties' name='roles' required/>

            <h4>Start Date At Role:</h4>
            <input type='date' placeholder='Start Date' name='startDate'required/>

            <h4>End Date At Role:</h4>
            <input type='date' placeholder='End Date' name='endDate'/>

            <input type='tel' placeholder='0780001324' name='tel' required/>

            <button type='submit'>Submit</button>
            <button onClick={HandleNavigation}>Back</button>

        
            
        </form>
    </div>
  )
}
