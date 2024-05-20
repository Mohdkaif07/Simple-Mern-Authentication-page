import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Home from './pages/home';
import Register from './pages/Register';
import Dashboard from './pages/dashboard';

const App = () => {
return (
    <div>

      <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/login' element ={<Login/>} />
          <Route path='/register'  element ={<Register/>} />
          <Route path='/dashboard' element ={<Dashboard/>} />
      </Routes>
      
   </div>
   
)
}
export default App;

