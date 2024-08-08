// import logo from './logo.svg';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import './axios';
// import { findAllByAltText } from '@testing-library/react';


function App() {
   const history = useNavigate();

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   async function registerUser(event){
         event.preventDefault()
        const response = await fetch('https://simple-mern-authentication-page-2.onrender.com/api/register', {
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
    history.push('/Login')
  }
  console.log(data)
}
  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='First Name'/><br/>
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/><br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password'/><br/>
        <input type='submit' value='register'/>
      </form>
      </div>
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
