// import React from 'react'

// const Child = (props) => {

//     console.log(props)
//   return (
//     <>
//     <h1>Child-{props.student}</h1>
//     <h3>StudentId--{props.sid}</h3>
//     </>
//   )
// }

// export default 

// import React from 'react'

// const Child = (props) => {
//     console.log(props)
//   return (
//     <>
//     <h1>Developers are </h1>
//     <h3>{props.developer[0]}</h3>
//     <h3>{props.developer[1]}</h3>
//     <h3>{props.developer[2]}</h3>
//     <h1>Numbers are </h1>
//     <h3>{props.numberarray[0]}</h3>
//     <h3>{props.numberarray[1]}</h3>
//     <h3>{props.numberarray[2]}</h3>
//     </>
//   )
// }

// export default Child

// import React from 'react'

// const Child = (props) => {
//     console.log(props);
//   return (
//     <>
//         <h1>{props.employee.ename} is earning Rs. {props.employee.sal}/-</h1>
//         <h1>your pet {props.pet.aname} colour is {props.pet.color}</h1>

//     </>
//   )
// }

// export default Child

// import React from 'react'

// const Child = (props) => {

//     console.log(props);

//   return (
//     <>
//     <h1>{props.bool===true?"jspiders":"qspiders"}</h1>
//     </>
//   )
// }

// export default Child

//?------------
// import React from 'react'

// const Child = (props) => {
//     console.log(props);

//     let {name,age}=props
//   return (
//     <>
//     <h1>Name : {name}</h1>
//     <h2>Age : {age}</h2>

//     </>
//   )
// }

// export default Child

//!
// import React from 'react'

// const Child = ({course, fees}) => {
//   return (
//     <>
//     <h1>{course} fees is {fees}</h1>
//     </>
//   )
// }

// export default Child

//?
// import React from 'react'

// const Child = (props) => {
//     console.log(props);
//     props.employee="SRI" //updating 
//   return (
//     <>
//         <h1>{props.employee} </h1>
//     </>
//   )
// }

// export default Child

//!
// import React from 'react'

// const Child = ({technology}) => {
//   return (
//     <>
//         <h1>{technology}</h1>
//     </>
//   )
// }

// export default Child

//?
// import React from 'react'

// const Child = (props) => {

//     console.log(props)

//     let {playername, nationality, jersy_no,photo}= props.player;

//   return (
//     <> 
//     <section style= {{ margin: "auto" , width:"50%", height:"400px" , width: "400px" , border: "2px solid brown", borderRadius: "20px", textAlign: "center", padding: "10PX 10PX" , backgroundColor: "pink"} }>
//         <h1> Profile of {playername} </h1>
//         <img src={photo} alt="image" height="200px" width= "200px" border= "3px" style= {{borderRadius:"50%"}} />
//         <h3> Nation : {nationality} </h3>
//         <p> Jersey_no: {jersy_no} </p>

//     </section>

//     </>
//   )
// }

// export default Child

//?destructuring
// 1st way: let{player:{playername, nationality, jersy_no,photo}}=props 
// 2nd way: let {playername, nationality, jersy_no,photo}= props.player

//!



// let {employee,changeemployee}= props.empinfo.

//!prop- children
// import React from 'react'

// const Child = (props) => {
//     console.log(props);
//     return (
//         <>
//             {props.children}
//         </>
//     )
// }

// export default Child

//?after receiving
// import React from 'react'

// const Child = (props) => {
//     console.log(props);

//     let {children} = props;

//     return (
//         <>
//             {children}
//         </>
//     )
// }

// export default Child

//?while receiving
// import React from 'react'

// const Child = ({children}) => {
//     return (
//         <>
//             {children}
//         </>
//     )
// }

// export default Child

//! task
// import React from 'react'

// const Child = (props) => {

//     console.log(props);
//     let { information: { iname, mode, fees }, children } = props;

//     return (
//         <>
//             <h1>institute:{iname}</h1>
//             <h3>mode:{mode}</h3>
//             <h3>fees:{fees}</h3>
//             {children}
//         </>
//     )
// }

// export default Child
//* props= {
// information: { iname: 'qspiders', mode: 'online' }
// children:
// }

//!prop-types
// import React from 'react'
// import prop from 'prop-types'

// const Child = ({pname , cost}) => {
//     return (
//         <>
//             <h1>cost for {pname} is rs. {cost} </h1>
//         </>
//     )
// }

// export default Child

// Child.propTypes = {
//     pname: prop.string,
//     cost: prop.number

// }

//! default props
// import React from 'react'

// const Child = ({product, rating}) => {
//     return (
//         <>
//             <h1> for {product} rating is {rating}/5</h1>
//         </>
//     )
// }

// export default Child

// Child.defaultProps = {
//     product: "pendrive",
//     rating:0

// }
//?consumer
// import React, { useContext } from 'react'
// import { ProductApi } from './context/ProductContext';

// const Child = () => {

//     let consumer = useContext(ProductApi) //data sent by the context api or data provide by the context api
//     console.log(consumer);


//     return (
//         <>
//             <h1>Child--{consumer}</h1>
//         </>
//     )
// }

// export default Child

//!
import React from 'react'

const Child = () => {
  return (
    <>Child</>
  )
}

export default Child