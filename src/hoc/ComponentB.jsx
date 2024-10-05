// import React from 'react'
// import Hoc from './Hoc'

// const ComponentB = (props) => {

//     console.log(props);//{username: "PavanKalyan"}

//   return (
//     <>
//         <h1>ComponentB-- one of my students name is {props.username}</h1>
//     </>
//   )
// }

// export default Hoc(ComponentB)

//?Task --- increement the value by 1 moving the cursor upon the btn
import React, { useState } from 'react'
import Hoc from './Hoc'

const ComponentB = (props) => {
  console.log(props);

  let{count,increement, decreement , reset} = props.commonlogic

  /*without Hoc logic here 
  // let [count, setCount] = useState(0)

  // let increement = () => {
  //   setCount(count + 1)
  // }*/

  return (
    <>
      <h1>ComponentB={count}</h1>
      <button onMouseMove={increement}>Increement value by moving the cursor upon the button</button>
      <button onMouseMove={decreement}>Decreement value by moving the cursor upon the button</button>
      <button onMouseMove={reset}>Reset value by moving the cursor upon the button</button>
    
    </>
  )
}

export default Hoc(ComponentB)
