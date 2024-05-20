import React from 'react'
import {Link ,useNavigate} from 'react-router-dom';
import './home.css'

function Navbar() {
    const isUserSignedIn=!!localStorage.getItem('token')
    const navigate=useNavigate();
    const handleSignout=()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
  return (
    <div className='nav-bar'>
     <h2>MERN Authentication</h2> 
        <ul>
            {isUserSignedIn ? (
                <>
                  <button onClick={handleSignout} >LOGOUT</button>
                </>
            ):(
                      <div className='navbar'>
                       <Link className='link-text' to='/home'>Home</Link>
                       <Link className='link-text' to='/Login'>LOGIN</Link>
                       <Link className='link-text' to='/register'>REGISTER</Link>
                      </div>
            )}
            
           
        </ul>
    </div>
  )
}

export default Navbar