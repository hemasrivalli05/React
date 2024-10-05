// //*Example 1 -->sending data together after receiving

// // import React from 'react'

// // const Cart = (props) => {

// //     console.log(props);
// //     let { pname , cost } = props.product
// //     return (
// //         <>
// //             <h1>I bought {pname} for rs.{cost}/-</h1>
// //         </>
// //     )
// // }

// // export default Cart
// //?
// // props = {
// //      product = {
// //      cost: 3000
// //      pname: "smartwatch"
// //      }
// //    }
// //?
// // import React from 'react'

// // const Cart = (props) => {

// //     console.log(props);
// //     let { productname , productcost } = props
// //     return (
// //         <>
// //             <h1>I bought {productname} for rs.{productcost}/-</h1>
// //         </>
// //     )
// // }

// // export default Cart
// // {productname: 'smartwatch', productcost: 3000}

// //exampl2
// // import React from 'react'

// // const Cart = (props) => {
// //     console.log(props);

// //     let {student , changeName} =props.studentinfo.info

// //   return (
// //     <>
// //         <h1>{student}</h1>
// //         <button onClick = {changeName} > by clicking change student name </button>
// //     </>
// //   )
// // }

// // export default Cart
// //?
// // import React from 'react'

// // const Cart = (props) => {
// //   console.log(props);

// //   let { addtolist: { pname, cost, color, brand, rating, photo }, children } = props.addtocart;

// //   return (
// //     <>
// //       <section className='productdetails'>
// //         <h1 id="1">Product details</h1>
// //         <img classname="img" src={photo} alt="pen" />

// //         <h2 id="2">
// //             <span className="detail-label">Name:</span> {pname} <br></br>
// //             <span className="detail-label">Color:</span> {color} <br></br>
// //             <span className="detail-label">Brand:</span> {brand} <br></br>
// //             <span className="detail-label">Price:</span> Rs.{cost}/- <br></br>
// //             <span className="detail-label">Rating:</span> {rating}/5 <br></br>
// //         </h2>
// //         {children}
// //       </section>
// //     </>
// //   );
// // }

// // export default Cart
// //way1 let {addtocart:{addtolist:{pname,cost,color,brand,rating,photo},children}}=props
// //way2 let{addtolist:{pname,cost,color,brand,rating,photo},children} = props.addcart

// //! sending the data from "ProductContext.jsx" to "Cart.jsx" with the help of "Context Api"

// import React, { useContext } from 'react'
// // import Cart from '../Cart'
// import { ProductApi } from './context/ProductContext'

// const Cart = () => {

//   let consumer = useContext(ProductApi) //data sent by the context api or data provide by the context api
//   console.log(consumer);

//   return (
//     <>
//       <h1>Cart--{consumer}</h1>
//     </>
//   )
// }

// export default Cart

// //!useContext()--> use the context api...Inside this hook pass the context api

//?//?sending data productcontext.jsx to cart.jsx with the help of context api
// import React, { useContext } from 'react'
// import { CourseApi } from './context/ProductContext'

// const Cart = () => {

//   let consumer = useContext(CourseApi)
//   console.log(consumer);

//   return (
//     <><h1>{consumer}</h1></>
//   )
// }

// export default Cart

//!example 3 -->accessing the data normally
//?//?sending data productcontext.jsx to cart.jsx with the help of context api
// import React, { useContext } from 'react'
// import { InstituteApi } from './context/ProductContext'

// const Cart = () => {

//   let consumer = useContext(InstituteApi);
//   console.log(consumer); //obj--{tname: 'core java' , institute: 'qspiders', fees: 5000}

//   return (
//     <>
//       <h1>we can learn{consumer.tname} at {consumer.institute} under fees rs. {consumer.fees}/-</h1>
//     </>
//   )
// }

// export default Cart
// if we {consumer} -->Uncaught Error: Objects are not valid as a React child (found: object with keys {tname, institute, fees}). If you meant to render a collection of children, use an array instead.

//!example 3 -->accessing the data by destructuring
//?//?sending data productcontext.jsx to cart.jsx with the help of context api
// import React, { useContext } from 'react'
// import { InstituteApi } from './context/ProductContext';

// const Cart = () => {

//     let {tname , institute , fees} = useContext(InstituteApi);


//   return (
//     <>
//       <h1>Under rs.{fees}/- learn {tname} at {institute}</h1>
//     </>
//   )
// }

// export default Cart

// 3 variables 
// let a = "abc"
// b=10
// //value ={a}
//?sending data productcontext.jsx to cart.jsx with the help of context api
import React, { useContext } from 'react'
import { MultiApi } from './context/ProductContext'

const Cart = () => {

  let {name , age , designation} = useContext(MultiApi)
  return (
    <>
      <h1> name {name}, age {age}, designation {designation} </h1>
    </>
  )
}

export default Cart