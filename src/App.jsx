import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home'
import './Style.css'
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';


const App = () => {

  const [isLogedin, setisLogedin] = useState(true);
  
  return (
    <>
    <Navbar isLogedin={isLogedin} setisLogedin={setisLogedin} />

    <Routes>
      <Route path='/' element={<Home />} />;
      <Route path='/dashboard' element={<Dashboard />} />;
      <Route path='/login' element={<Login />} />;
      <Route path='/signup' element={<Signup />} />


    </Routes>
    <LoginForm />
    <SignupForm />
    
    </>
  )
}


export default App