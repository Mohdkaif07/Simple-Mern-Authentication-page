import React, {useEffect, useState} from 'react'
import {jwtDecode} from 'jwt-decode'
// import {useNavigate} from 'react-router-dom'
// import { decode } from 'jsonwebtoken'
      
const Dashboard = () => {
    
    // const navigate= useNavigate()
    

    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')
     
    async function populateQuote(){
        const req = await fetch('http://localhost:1337/api/quote', {
            headers:{
                'x-access-token': localStorage.getItem('token')
            }
        })
        const data = req.json()
        console.log(data)
    }

    useEffect(()=>{
        
        const token = localStorage.getItem('token')
        if(token){
            const user = jwtDecode(token)
            if(!user){
                localStorage.removeItem('token')
                // navigate('/login',{replace:true})
            } else{
                populateQuote()
            }
        }
    }, [])
    async function updateQuote(event){
        event.preventdefault()
        const req = await fetch('http://localhost:1337/api/quote',{
            method: 'POST',
            headers:{
                'content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                quote:tempQuote,
            }),
            
              
        })
        const  data = await req.json()
        if(data.status==='ok'){
            setQuote(tempQuote)
            setTempQuote('')
        }
        else{
        alert(data.error)
        
        }
    }

    return (
           <div>
                <h1>Your quote: {quote || 'No quote found'}</h1>
                 <form onSubmit={updateQuote}>
                       <input 
                             type='text'
                             placeholder='Quote'
                             value={tempQuote}
                             onChange={(e)=>setTempQuote(e.target.value)}
                        />
                        <input type= "submit" value="update Quote"/>
                 </form>
           </div>
    )
}

export default Dashboard