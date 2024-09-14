import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginForm = ({setisLogedin}) => {
    const Navigate = useNavigate();
  
    const[formData, setFormData] = useState({email:"", password:''})
    const[showPassword,setShowPsssword] = useState(false)
    const changeHandler = (event)=>{
        setFormData((prevData) =>(
            {
                ...prevData,
            [event.target.name]:event.target.value
            }
            
          )) 
    }
   function submitHandler(event){
    event.preventDefault();
    setisLogedin(true);
    toast.success("Loged In");
    Navigate('/dashboard');
   }
  return (
    <div>
        <form onSubmit={submitHandler} >
            <label >
                <p>Email Address <sup>*</sup></p>
                <input type="text" name='email' required value={FormData.email} onChange={changeHandler} placeholder='Enter your email id' />
            </label>
            <label >
                <p>Password <sup>*</sup></p>
                <input type={showPassword ? 'text' : 'password'} name='password' required value={FormData.password} onChange={changeHandler} placeholder='Enter your passord' />
                <span onClick={()=> setShowPsssword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />) }
                </span> 
                <Link to="#">
                    <p>Forgot Password</p>
                </Link> 
            </label>

            <button>Sign In</button>
        </form>
    </div>
  )
  
}

export default LoginForm