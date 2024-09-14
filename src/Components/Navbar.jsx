import React from 'react';
import weblogo from '../Components/logo.png'
import { Link } from 'react-router-dom';
import '../Style.css'

const Navbar = ({isLogedin, setLogedin}) => {

    // let isLogedin = props.isLogedin;
    // let setLogedin = props.setLogedin

    const handleClick = () =>{
        setLogedin((prev)=>!prev);
    }
  return (
    <div className="navbar flex justify-between items-center w-full bg-neutral-700 h-[10vh]">
        
    <Link to='/' ><img src={weblogo} alt="logopng" style={{height:"70px", width:'250px', borderRadius:'45%',margin:'20px'  }} /></Link>
            
        <nav className='flex'>
        <ul className='flex gap-10 p-8 font-extrabold text-neutral-400'>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/about' >About</Link>
            </li>
            <li>
                <Link to='/contact' >Contact</Link>
            </li>
        </ul>
        </nav>
        
        <div className='m-10 w-[25vw] '>
            { !isLogedin &&
                <Link to="/login"><button onClick={handleClick} className='border-4  border-b-orange-600 border-double bg-black text-white w-auto rounded-lg p-3 m-5'>Login</button ></Link>
            }
            { !isLogedin &&
                <Link to="/signup"><button onClick={handleClick} className='border-4  border-b-orange-600 border-double bg-black text-white w-auto rounded-lg p-3'>Signup</button></Link>
            }
            { isLogedin &&
                <Link to="/"><button onClick={handleClick} className='border-4  border-b-orange-600 border-double bg-black text-white w-auto rounded-lg p-3 m-5'>Logout</button></Link>
            }
            { isLogedin &&
                <Link to="/dashboard"><button onClick={handleClick} className='border-4  border-b-orange-600 border-double bg-black text-white w-auto rounded-lg p-3'>Dashboard</button></Link>
            }
        </div>
    </div>
  )
}

export default Navbar