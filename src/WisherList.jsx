//mediator component 
//sending data from product.jsx to cart.jsx through wisherlist.jsx
//*Example 1 -->sending data together after receiving

// import React from 'react'
// import Cart from './Cart'

// const WisherList = (props) => {

//     console.log(props) // obj-->{pname: 'smartwatch', cost: 3000}
//   return (
//     <>
//        <Cart product = {props} /> 
//     </>
//   )
// }

// export default WisherList
//?
// import React from 'react'
// import Cart from './Cart'

// const WisherList = (props) => {

//     console.log(props) // obj-->{pname: 'smartwatch', cost: 3000}
//   return (
//     <>
//        <Cart productname = {props.pname} productcost={props.cost} /> 
//     </>
//   )
// }

// export default WisherList

//example2
// import React from 'react'
// import Cart from './Cart'

// const WisherList = (props) => {
//     console.log(props);//nested obj

//   return (
//     <>
//         <Cart studentinfo = {props}/>
//     </>
//   )
// }

// export default WisherList
//?
import React from 'react'
import Cart from "./Cart"

const WisherList = (props) => {
  console.log(props);
  return (
    <>
      <Cart addtocart={props} />
    </>
  )
}

export default WisherList
