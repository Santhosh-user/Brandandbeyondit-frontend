import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "../App.css"

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
      
        axios.post("https://brandbeyond11.herokuapp.com/user",{},{
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
        <button className='signout-btn' onClick={()=>{ localStorage.setItem("cred",JSON.stringify(null))
      return navigate("/") 
      }}>Sign Out</button>
    <div className='admin-container'>
       
        <div className='table-container'>
            <div className='user-details'>User Details</div>
                <table className='table'>
                        <tr className='table-heading'>
                            <td className='s-no'>S.No</td>
                            <td className='table-email'>Email</td>
                        </tr>
                        {
                        users.map((e,i)=>{
                            return <tr className='individual-rows'>
                                <td className='s-no1'>{i+1}</td>
                                <td className='individual-rows'>{e.email}</td>
                            </tr>
                        })
                        }
                </table>
            </div>
        </div>
    </div>               
  )
}

export default Admin