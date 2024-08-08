// import './App.css';
import React, {useState} from 'react';


function App() {
//   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event){
  event.preventDefault()
  const response = await fetch('https://simple-mern-authentication-page-2.onrender.com/', {
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
     alert('login successful')
     window.location.href = '/dashboard'
  }else{
      alert('please check your username and passsword')
  }
  console.log(data)
  
}
  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        {/* <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='First Name'/><br/> */}
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/><br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password'/><br/>
        <input type='submit' value='login'/>
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
