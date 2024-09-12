import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const SignupForm = () => {
    const[showPassword,setShowPsssword] = useState(false)
    const[formData, setFormData] = useState({firstname:"", lastname:"", password:"", email:"",conformpassword:""})
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
            <button>Indtructer</button>
        </div>

        <form action="">
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
                <input type='mail' required name='email' value={formData.email} onChange={changeHandler} placeholder='Enter email id' />
            </label> 
            </div>

            <div>
            <label >
                <p>Password<sup>*</sup></p>
                <input type={showPassword ? 'text' : 'password'} required name='password' value={formData.password} onChange={changeHandler} placeholder='Enter your password' />
                <span onClick={()=> setShowPsssword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />) }
                </span> 
            </label>

            <label >
                <p>Conform Password<sup>*</sup></p>
                <input type={showPassword ? 'text' : 'password'} required name='conformpassword' value={formData.conformpassword} onChange={changeHandler} placeholder='Enter your password again' />
                <span onClick={()=> setShowPsssword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />) }
                </span> 
            </label>   
            </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm