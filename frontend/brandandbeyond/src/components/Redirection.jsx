import React from 'react'
import  {Navigate} from "react-router-dom"


const Redirection = () => {
    

    let cred=JSON.parse(localStorage.getItem("cred"));
    
  
    
    if(Credential){

    if(cred.auth=="admin"){
    return <Navigate to={'/admin'}/>
    }
    else{
        return <Navigate to={"/homepage"}/>
    }


}
    
  
}

export default Redirection