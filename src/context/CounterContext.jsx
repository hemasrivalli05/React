//! sending the data from "countercontext.jsx" to simple counter.jsx
import React, { createContext, useState } from 'react'
import SimpleCounter from '../task/SimpleCounter'

//!step1
export let CounterApi= createContext()

const CounterContext = () => {

    let [counter , setCounter] = useState(0)
    let increement = () => {
        setCounter(counter +1)
    }
    let decreement = () => {
        setCounter(counter -1)
    }
    let reset = () => {
        setCounter(0)
    }
  return (
    //! step2 - context provider
    <CounterApi.Provider value = {{counter , increement, decreement, reset}}>
        <SimpleCounter />
    </CounterApi.Provider>
  )
}

export default CounterContext