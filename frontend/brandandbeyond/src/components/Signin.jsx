import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



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

    axios.post("http://localhost:8080/user/signin",{
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

        axios.post("http://localhost:8080/user/signup",{
        "email":user.email,
        "password":user.password
        }).then((res)=>{
        further(res.data)
        }).catch((err)=>{
        alert(err.response.data.err)
        })

    }

  return (
    
    <div>
        <input onChange={changeUserData}  id='email' type="email" placeholder='Email'/>
    
        <input onChange={changeUserData} id='password' type="password"  placeholder='Password' />

        <div>

        <button onClick={signin} className='sign-shop'>Sign In</button><button onClick={signup} className='sign-shop'>Sign Up</button>

        </div>

    </div>
      
  )
}

export default Signin


