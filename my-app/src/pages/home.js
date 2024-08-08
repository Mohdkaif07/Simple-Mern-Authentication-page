import React from 'react'
import {Link ,useNavigate} from 'react-router-dom';
import './home.css'
import './Login.js'
function Navbar() {

  // const token = localStorage.setItem("token", )
    const isUserSignedIn=!!localStorage.getItem('token')
    
    const navigate = useNavigate();
    console.log(isUserSignedIn)
    const handleSignout=()=>{
        localStorage.removeItem('token')
        navigate('/Login')
    }
  return (
    
    <div className='nav-bar'>
     <h2>MERN Authentication</h2> 
        
            {isUserSignedIn ? (
                
                  <div className='navbar'>
                      <Link className='link-text' to='/'>Home</Link>
                      <input className='link-text' type='search' placeholder='search'/>
                  <button className='logout' onClick={handleSignout} >LOGOUT</button>
                </div>
            ):(
                      <div className='navbar'>
                      <Link className='link-text' to='/'>Home</Link>
                      <input className='link-text' type='search' placeholder='search'/>
                      <Link className='link-text1' to='/Login'>LOGIN</Link>
                      <Link className='link-text' to='/register'>REGISTER</Link>
                      
                      </div>
                    
            )}
            
           
        
    </div>
  
    
  )
}

export default Navbar