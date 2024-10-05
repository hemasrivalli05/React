// import React, { useEffect, useState } from 'react'
// import UseEffectChild from './UseEffectChild'

// const UseEffectParent = () => {

//     let [student , setStudent] = useState("Ali")

//     //! only fun (no dependency_list)
//     useEffect(() => {
//         console.log("equal to both componentDidMount() and componentDidUpdate()----> render ..useEffect called")
//     })

//     //! [] -> empty dependency list ---> execute " only once"
//     useEffect(() => {
//         console.log("equal to componentDidMount()----> ..useEffect called");
//         }, []);

//     //! [value] --> dependency list with value --> componentDidupdate()
//     //?[value]--> when we do any changes related student state variable useEffect() should called
//     //Ex[student] - any change related student state variable useEffect() should called
//     useEffect(() => {
//         console.log("equal to componentDidUpdate()----> ..useEffect called");

//     }, [student]);

//   return (
//     <>
//         <h1>Content-{student}</h1>
//         <h1>{student === "Ali" ?<UseEffectChild/>: <></>}</h1>
//         <button onClick={() => setStudent("Ahmed")}>Change</button>
//     </>
//   );
// }

// export default UseEffectParent

//! setStudent() --> before btn click updator fun is called without any value 
//! setStudent("ahmed") --> after btn click, updator fun is called with passed value

//! equalt to both componentDidMount() and componentDidUpdate()
//? toggle the title --> (targetting the tittle --> sideEffect)
//state --> false ==="Web Tech"
//state --> true ==="ReactJS"

// import React, { useEffect, useState } from 'react'

// const UseEffectParent = () => {

//     let[tech , setTech]= useState(false)

//     //! equalt to both componentDidMount() and componentDidUpdate()
//     useEffect(() => {
//         //? handle sideEffect
//         if(tech){
//             document.title="REACTJS"
//         }else {
//             document.title="WEBTECH";
//         }
//         console.log("UseEffect is calling.....")

//     });

//     // let changeTech =() => {
//     //     setTech(!tech)
//     //     //!false --> true --> 1st btn 
//     //     //!true --> false --> 2nd btn
//     // }

//   return (
//     <>
//         {/* <h1>{tech? "REACTJS" : "WEB TECH"}</h1> */}
//         <button onClick={() => setTech(!tech)}>Change Tech</button>
//     </>
//   )
// }

// export default UseEffectParent

//!componentDidUpdate
import React, { useState } from 'react'

const UseEffectParent = () => {

    let [count , setCount] = useState(0)


  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}></button>
    </>
  )
}

export default UseEffectParent