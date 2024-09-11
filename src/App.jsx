import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home'
import './Style.css'


const App = () => {

  const [isLogedin, setisLogedin] = useState(true);
  return (
    <>
    {/* <Navbar isLogedin={isLogedin} setisLogedin={setisLogedin} /> */}

    <Routes>
      <Route path='/' element={<Home />} />;
      <Route path='/dashboard' element={<Dashboard />} />;
      <Route path='/login' element={<Login />} />;
      <Route path='/signup' element={<Signup />} />


    </Routes>
    <div className='h-screen w-full'>
      <h1 className='content-center'>Student Information</h1>
      <form action="" className='flex flex-col justify-evenly form'>
        <span><label htmlFor="name">Name</label> <input type="text"id='name' className='input' required /><span className='data'>Please enter Name</span></span><br /><br></br>
        <span><label htmlFor="username">Username</label> <input type="text" id='username' className='input' required/><span className='data'>Please enter Username</span></span><br />
        <span><label htmlFor="password">Password</label> <input type="password" id='password' className='input' required /><span className='data'>Please enter password</span></span><br /><br></br>
        <span><label htmlFor="password1">Re-password</label> <input type="password" id='password1' className='input' required /><span className='data'>Please enter password again</span></span><br /><br></br>
        <span><label htmlFor="email">Email</label>
        <input type="email" id='email' className='input' /><span>Please enter valid email</span></span>
        <span><label htmlFor="salary">Salary</label><input type="number" id="salary" className='input' required /><span>Please enter salary</span></span>
        <button onClick={check} className='button' typeof='submit'>SUBMIT</button>

      </form>
    </div>
    </>
  )
}
const check = ()=>{
  if(input.value == " "){
    alert("laude pura bhar")
  }else{
    alert("form submitted")
  }
}

export default App