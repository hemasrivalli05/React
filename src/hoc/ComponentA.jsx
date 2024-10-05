// import React from 'react'
// import Hoc from './Hoc'

// const ComponentA = (props) => {

//     console.log(props);
//   return (
//     <>
//         <h1>ComponentA-- {props.username} is a famous telugu actor</h1>
//     </>
//   )
// }

// export default Hoc(ComponentA)
//! Hoc() -- functional call
//CompoA passed to Hoc during function call --> "Argument"

//?Task --- increement the value by 1 clicking uopn the btn
import React /*, { useState }*/ from 'react'
import Hoc from './Hoc'

const ComponentA = (props) => {
  console.log(props);

  let{count, increement, decreement ,reset} = props.commonlogic

    /*without Hoc logic here 
  // let [count, setCount] = useState(0)

  // let increement = () => {
  //   setCount(count + 1)
  // }*/

  return (
    <>
      <h1>COMPONENTA --{count} </h1>
      <button onClick={increement}>Increement by clicking upon the btn</button>
      <button onClick={decreement}>Decreement by clicking upon the btn</button>
      <button onClick={reset}>Reset by clicking upon the btn</button>

    </>
  )
}

export default Hoc(ComponentA)
