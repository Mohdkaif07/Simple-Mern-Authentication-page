// import './App.css';
import React, {useState} from 'react';
import {Link } from 'react-router-dom';


function App() {
//   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event){
  event.preventDefault()
  const response = await fetch('http://localhost:1337/api/login', {
  headers: {
    'Content-Type':'application/JSON',
  },
  method: 'POST',
  body : JSON.stringify({
    // name,
    email,
    password,
  }),
  })

  const data = await response.json()
  if(data.user) {
    const token = await data.token;
    localStorage.setItem('token',token)
    console.log("waiting"+ token)
     alert('login successful')
     window.location.href = '/'
  }else{
      alert('please check your username and passsword')
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


    <div className="login">
      <h1>Student Login</h1>
      <form onSubmit={loginUser}>
        {/* <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='First Name'/><br/> */}
        <input className='input' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/><br/>
        <input className='input' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password'/><br/>
        <input className='button' type='submit' value='signin'/>
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
