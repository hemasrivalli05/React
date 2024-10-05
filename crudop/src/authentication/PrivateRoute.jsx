import React from 'react'
import Login from './Login'

const PrivateRoute = (props) => {

    let token = localStorage.getItem("TOKEN")

    if(token){
        return props.children
    }else{
        <Login/>
    }

    return(
        <div className='before-login'>Please login </div>
    )
 
}

export default PrivateRoute