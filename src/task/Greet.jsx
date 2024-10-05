import React, { useState } from 'react'

const Greet = () => {

    let [inputData, setInputData] = useState("")
    let [message, setMessage] = useState("")

    let greeting = () => {
        if (inputData === "") {
            alert("pls enter name")
        } else {
            setMessage(`Hello, ${inputData}`)
            setInputData("")
        }
    }

    return (
        <>
            <h1>WELCOME TO GREET-APP</h1>
            <input type="text" placeholder='Enter your Name' value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <button onClick={greeting}>Greet</button>
            <h1>{message}</h1>
        </>
    )
}

export default Greet