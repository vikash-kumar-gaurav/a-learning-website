import React from 'react';
import weblogo from '../Components/logo.png'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    let isLogedin = props.isLogedin;
    let setLogedin = props.setLogedin
  return (
    <div className="navbar flex justify-between items-center w-full bg-neutral-700 h-[10vh]">
        
    <Link to='/' ><img src={weblogo} alt="logopng" style={{height:"70px", width:'250px', borderRadius:'45%',margin:'20px'  }} /></Link>
            
        <nav className='flex'>
        <ul className='flex gap-10 p-8 font-extrabold text-neutral-400'>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/' >About</Link>
            </li>
            <li>
                <Link to='/' >Contact</Link>
            </li>
        </ul>
        </nav>
        {/* //login,signup,dashboard,logout */}
        <div className='m-10 w-[25vw]'>
            { !isLogedin &&
                <Link to="/login"><button className=''>Login</button></Link>
            }
            { !isLogedin &&
                <Link to="/signup"><button>Signup</button></Link>
            }
            { isLogedin &&
                <Link to="/"><button>Logout</button></Link>
            }
            { isLogedin &&
                <Link to="/dashboard"><button>Dashboard</button></Link>
            }
        </div>
    </div>
  )
}

export default Navbar