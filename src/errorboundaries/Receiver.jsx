import React from 'react'

const Receiver = (props) => {
    console.log(props);

    let{money}=props

    if(money >= 17000){
        throw new Error("Money cannot be sent more than Rs.5000/-")
    }

  return (
    <>
    <h1>Making Transaction of Rs.{money}/-</h1>
    </>
  )
}

export default Receiver