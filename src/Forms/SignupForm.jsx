import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignupForm = ({setisLogedin}) => {
    const Navigate = useNavigate();
    const[showPassword1,setShowPassword1] = useState(false)
    const[showPassword2,setShowPassword2] = useState(false)
    const[formData, setFormData] = useState({firstname:"", lastname:"", password:"", email:"",conformpassword:""})
    function submitHandler (events){
        events.preventDefault();
        if(formData.conformpassword !== formData.password ){
            toast.error('password and confirm password must be same');
        }
        if(formData.conformpassword === formData.password ){
            toast.success('Account Created');
            {
                setisLogedin((prev)=> !prev)
            }
            Navigate('/dashboard')
        }
        
    }
    const changeHandler = (event)=>{
        setFormData((prevData)=>
            (
                {
                    ...prevData,
                    [event.target.name]:event.target.value
                }
            ))
    }
  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructer</button>
        </div>

        <form onSubmit={submitHandler} action='#'>
            <div>
            <label >
                <p>First Name<sup>*</sup></p>
                <input type="text" required name='firstname' value={formData.firstname} onChange={changeHandler} placeholder='Enter First name' />
            </label> 

            <label >
                <p>Last Name<sup>*</sup></p>
                <input type="text" required name='lastname' value={formData.lastname} onChange={changeHandler} placeholder='Enter last name' />
            </label>  
            </div>

            <div>
            <label >
                <p>Email Id<sup>*</sup></p>
                <input type='email' required name='email' value={formData.email} onChange={changeHandler} placeholder='Enter email id' />
            </label> 
            </div>

            <div>
            <label >
                <p>Create Password<sup>*</sup></p>
                <input type={showPassword1 ? 'text' : 'password'} required name='password' value={formData.password} onChange={changeHandler} placeholder='Enter your password' />
                <span onClick={()=> setShowPassword1((prev)=> !prev)}>
                    {showPassword1 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />) }
                </span> 
            </label>

            <label >
                <p>Confirm Password<sup>*</sup></p>
                <input type={showPassword2 ? 'text' : 'password'} required name='conformpassword' value={formData.conformpassword} onChange={changeHandler} placeholder='Enter your password again' />
                <span onClick={()=> setShowPassword2((prev)=> !prev)}>
                    {showPassword2 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />) }
                </span> 
            </label>   
            </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm