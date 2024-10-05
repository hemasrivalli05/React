import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Settings = () => {

  //inside navigate variable function returned by useNavigate() is stored
  let navigate = useNavigate()

  let gotohome = () => {
    navigate('/')
  }

  let navigateToMenu=() => {
    navigate("/menu")
  }

  // -ve --indicates backward 
  let goback = () => {
    navigate(-1)
  }

  return (
    <>
        <Header/>
        <h1>Settings</h1>
        <button onClick={gotohome}>GO-TO-HOME</button>
        <button onClick={navigateToMenu}>GO-TO-MENU</button>
        <button onClick={goback}>GO-BACK</button>
         {/* inline method example ----> <button onClick={() => setTech(!tech)}>Change Tech</button> */}

    </>
  )
}

export default Settings

//! useNavigate()-->navigate btw  the webpages within the DOM and outside the dom (back button)
//hook --> "react-router-dom"
//? useNavigate() returns a function --> this function takes eaither path or..delta(-1) as the value 

//! diff btw NavLink and useNavigate()**OR** Diff btw Link and useNavigate()
//?NavLink/Link --> Component--> navigate btw the webpages within the DOM
//?useNavigate() --> Hook--> navigate btw the webpages within the DOM and outside the dom (back button)