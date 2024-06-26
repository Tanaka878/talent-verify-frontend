import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SingleUpload = (props) => {
    const navigate = useNavigate();
    console.log('Single Upload',props.newMessage)
   
    
    const[employeeDetails, changeDetails] = React.useState({
        name:'',
        surname:'',
        email:'',
        department:'',
        roles:'',
        startDate:'',
        endDate:'',
        tel:'',
        companyemail:props.newMessage
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

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/single-upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employeeDetails)
            });

            if (response.ok) {
                console.log('Employee details uploaded successfully');
               
                
            } else {
                console.error('Error uploading employee details:', response.status);
            }
        } catch (error) {
            console.error('Error uploading employee details:', error);
        }
    }

    function HandleNavigation(){
        navigate('/UploadType');
    }
    
    return (
        <div className='signup-container'>
            <h1>Talent-Verify</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' name='name' required onChange={handleChange} />
                <input type='text' placeholder='Surname' name='surname' required onChange={handleChange} />
                <input type='email' placeholder='example@gmail.com' name='email' required onChange={handleChange} />
                <input type='text' placeholder='Department' name='department' required onChange={handleChange} />
                <input type='text' placeholder='Roles/Duties' name='roles' required onChange={handleChange} />
                <h4>Start Date At Role:</h4>
                <input type='date' placeholder='Start Date' name='startDate' required onChange={handleChange} />
                <h4>End Date At Role:</h4>
                <input type='date' placeholder='End Date' name='endDate' onChange={handleChange} />
                <input type='tel' placeholder='0780001324' name='tel' required onChange={handleChange} />
                <button type='submit'>Submit</button>
                <button onClick={HandleNavigation}>Back</button>
            </form>
        </div>
    )
}
