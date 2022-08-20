import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';



import axios from "axios";

const Signin = () => {

  const navigate=useNavigate();

  const cred=JSON.parse(localStorage.getItem("cred"))
     

    const [user,setUser]=useState({
        email:"",
        password:""
    });

    const changeUserData=(e)=>{
        var {id,value}=e.target;
        setUser({
        ...user,[id]:value
    })

    }

    const checkData=()=>{
        return true
    }

    const further=(x)=>{

     localStorage.setItem("cred",JSON.stringify(x));
    
     return navigate('/home');

    }
  const signin=()=>{

   if(!checkData()){
    return;
   }

    axios.post("https://brandbeyond11.herokuapp.com/user/signin",{
        "email":user.email,
        "password":user.password
    }).then((res)=>{
        
        further(res.data)
        alert("successfully logged in")
    }).catch((err)=>{
        
        alert(err.response.data.err)
    })
    }

  const signup=()=>{

        if(!checkData()){
        return;
        }

        axios.post("https://brandbeyond11.herokuapp.com/user/signup",{
        "email":user.email,
        "password":user.password
        }).then((res)=>{
        further(res.data)
        }).catch((err)=>{
        alert(err.response.data.err)
        })

    }

  return (
    
    <div className='whole-wrap' >
      
      <div className='welcome-wrap'>
        <div className='welcome'>Welcome! Please enter your details</div>
      </div>

      <div className='container'>
      

        <div><input onChange={changeUserData} placeholder="Enter email"  id='email' type="email" placeholder='Email'/></div>  
      
        <div><input onChange={changeUserData} placeholder="Enter password" id='password' type="password"  placeholder='Password' /></div>  

          <div className='buttons'>
            <button className="signin-btn" onClick={signin}>Sign in</button>
            <button className="signup-btn" onClick={signup}>Sign Up</button>
          </div>

      </div>
    </div>
      
  )
}

export default Signin


