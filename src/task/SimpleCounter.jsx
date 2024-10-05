// //? FBC shortcut --->rafce

// import React, { useState } from 'react'
// import style from "./counter.module.css"
// const SimpleCounter = () => {

//     let [counter, setCounter] = useState(0)

//     let increment = () => {
//         setCounter(counter + 1)
//     }

//     let decrement = () => {
//         setCounter(counter - 1)
//     }

//     let reset = () => {
//         setCounter(0)
//     }

//     return (
//         <>
//             <section id={style.counterContainer}>
//                 <h1><u>SIMPLE COUNTER </u></h1>
//                 <h2>{counter}</h2>
//                 <div className = {style.btnContainer} >
//                     <button onClick={decrement}>-</button>
//                     <button onClick={reset}>RESET</button>
//                     <button onClick={increment}>+</button>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default SimpleCounter
//! sending the data from "countercontext.jsx" to simple counter.jsx
import React, { useContext } from 'react'
import { CounterApi } from '../context/CounterContext'

const SimpleCounter = () => {

    //!consume----
    let consumer = useContext(CounterApi)
    // console.log(consumer);

    let {counter , increement, decreement, reset} = useContext(CounterApi);

  return (
    <>
        <h1>COUNTER--{counter}</h1>
        <button onClick = {increement}>INCREEMENT</button>
        <button onClick = {decreement}>DECREEMENT</button>
        <button onClick = {reset}>RESET</button>
    </>
  );
}

export default SimpleCounter