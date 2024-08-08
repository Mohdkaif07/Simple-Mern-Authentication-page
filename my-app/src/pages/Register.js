// import logo from './logo.svg';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './home.css'
// import './axios';
// import { findAllByAltText } from '@testing-library/react';


function App() {
   const navigate = useNavigate();

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   async function registerUser(event){
         event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
       headers: {
        'Content-Type':'application/JSON',
         },
         method: 'POST',
        body : JSON.stringify({
        name,
        email,
        password,
      }),
  })
  const data = await response.json()
  if(data.status==="ok"){
    alert('Registered successful')
    navigate('/Login')
  }
  else{
        //  document.getElementsById("p").innerHTML ="Duplicate email found";
      alert('email id already registerd!')
      
  }
  console.log(data)
}
  return (
    <>
    <div className='navbar'>
            <Link className='link-text' to='/'>Home</Link>
            <input className='link-text' type='search' placeholder='search'/>
            <Link className='link-text1' to='/Login'>LOGIN</Link>
            <Link className='link-text' to='/register'>REGISTER</Link>
            </div>
        <div className="App">
          <h1>c:\Student Register</h1>
       <form onSubmit={registerUser}>
        <input className='input' value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='First Name'/><br/>
        <input className='input' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/><br/>
        <input className='input' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password'/><br/>
        <p id='p' style={{color: 'red'}}> </p>
        <input className='button' type='submit' value='Register'/>
       </form>
       </div>
      </>
      /* /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="gfg">hello world ! </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="div">amazon</div>
      
      <div className="div">amazon</div> */ 
      

    
    
  );
  
}

export default App;
