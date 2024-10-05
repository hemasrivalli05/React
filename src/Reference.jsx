// import React, { useRef } from 'react'

// const Reference = () => {

//     //! step1: create a reference variable
//     let inputRef = useRef()
//     console.log(inputRef)

//     let handleInput = () => {
//         inputRef.current.placeholder="Enter a value"
//         inputRef.current.style.background = "yellow"
//         inputRef.current.style.padding ="10px"
//         inputRef.current.focus()
//         inputRef.current.type="password"
//     }

//   return (
//     <>
//       {/*step2: Target the particular element/ connect reference variable and particular element-->ref= {inputRef}*/}
//         <input type="text" ref= {inputRef}/>
//         <button onClick={handleInput}>CHANGE</button>
//     </>
//   )
// }

// export default Reference

//! step1: create a reference variable
//! step2: Target the particular element/ connect reference variable and particular element
//? {current: undefined}--> befor targetting element , value "current" is "undefined"
//? current : input --> after targetting element 

