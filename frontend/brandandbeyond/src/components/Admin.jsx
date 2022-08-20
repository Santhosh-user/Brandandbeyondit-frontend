import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Admin = () => {

    const [users,setUsers]=useState([])

    const navigate=useNavigate();

    const cred=JSON.parse(localStorage.getItem("cred"));

    useEffect(()=>{

        if(!cred){
             return navigate("/")
        }
    },[])

    
    useEffect(()=>{
      
        axios.post("http://localhost:8080/user",{},{
        headers:{
            authorization: 'Bearer ' +  cred.token,
        }})
        .then((res)=>{
        setUsers(res.data)
        console.log(res.data)
        })
        .catch((err)=>{
        alert(err.response.data.err)
        })

    },[])

  return (
    <div>
        <button onClick={()=>{ localStorage.setItem("cred",JSON.stringify(null))
      return navigate("/")
      }}>Sign Out</button>
    
    <div>User Details</div>

<div>
    <table>
       
            <tr>
<td>SI</td>
<td>Email</td>
            </tr>
     {
        users.map((e,i)=>{
            return <tr>
                <td>{i+1}</td>
                <td>{e.email}</td>
            </tr>
        })
     }
    </table>
</div>
    </div>
  )
}

export default Admin