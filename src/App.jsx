import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home'
import './Style.css'



const App = () => {

  const [isLogedin, setisLogedin] = useState(false);
  
  return (
    <>
    <Navbar isLogedin={isLogedin} setisLogedin={setisLogedin} />

    <Routes>
      <Route path='/' element={<Home />} />;
      <Route path='/dashboard' element={<Dashboard />} />;
      <Route path='/login' element={<Login isLogedin={isLogedin} setisLogedin={setisLogedin} />} />;
      <Route path='/signup' element={<Signup />} />


    </Routes>
    
    
    </>
  )
}


export default App