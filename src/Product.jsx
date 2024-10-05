//! parent -from proct to cart sending through wisherlist.jsx
//*Example 1 -->sending data together after receiving
// import React from 'react'
// import WisherList from './WisherList'

// const Product = () => {
//   return (
//     <>
//       <WisherList pname="smartwatch" cost={3000}/>
//     </>
//   )
// }

// export default Product

//example 2
// import React , {useState} from 'react'
// import WisherList from './WisherList'

// const Product = () => {

//   let [student, setStudent] = useState("dheeraj")

//   let changeName = () => {
//     setStudent("abhishekh")
//   }

//   return (
//     <>
//       <WisherList info={{student,changeName}} />
//     </>
//   )
// }

// export default Product

//? Task
//sending data from product.jsx to cart.jsx through wisherlist.jsx
import React, { useState } from 'react'
import WisherList from './WisherList'


const Product = () => {

  let [product, setProduct] = useState({
    pname: "PEN",
    cost: 20,
    color: "red",
    brand: "cello",
    rating: 4.2,
    photo: "/public/images/pen2.webp"
  })
  return (
    <>
      <WisherList addtolist={product}>
        <h3 id="desc1">Extra marks for good handwriting</h3>
        <p id="desc2">waterproof and long lasting..</p>
      </WisherList>
    </>
  )
}

export default Product