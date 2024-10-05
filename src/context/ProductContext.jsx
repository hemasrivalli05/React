// //! sending the data from "ProductContext.jsx" to "Cart.jsx"  and child.jsx with the help of "Context Api"

// import React, { createContext } from 'react'
// import Cart from '../Cart'
// import Child from '../Child'

// //!STEP 1 - create a context
// //createContext()--> it returns a "component" i.e Context Api to store the component variable name "ProductApi" the first letter is in capital "P"

// export let ProductApi = createContext()


// const ProductContext = () => {
//     return (
//         <ProductApi.Provider value="Passing data through context api">
//             <Cart />  {/* cart , child consumer */}
//             <Child/>
//         </ProductApi.Provider>
//     )
// }

// export default ProductContext

// //!STEP 1 - create a Context
// //!STEP 2 - Context provider
// //wrap the provider around the consumer component *** or *** in the place of <></> of sender componnet call the Context Provider Component
// // to send data special props--> value

// //!STEP 3 - Context Consumer

//?sending data productcontext.jsx to cart.jsx with the help of context api

// import React, { createContext ,useState} from 'react'
// import Cart from '../Cart'

// export let CourseApi = createContext()
// const ProductContext = () => {

//     let[course,setCource]=useState("reactjs")

//   return (
//     <CourseApi.Provider value={course}>
//         <Cart />
//     </CourseApi.Provider>
//   )
// }

// export default ProductContext

//!example 3
//?sending data productcontext.jsx to cart.jsx with the help of context api
// import React, { createContext ,useState} from 'react'
// import Cart from '../Cart'

// export let InstituteApi = createContext()

// const ProductContext = () => {

//     let[tech, setTech] = useState({
//         tname: "core Java",
//         institute: "qspiders",
//         fees: 5000
//     })

//   return (
//     <InstituteApi.Provider value = {tech}>
//         <Cart />
//     </InstituteApi.Provider>
//   )
// }

// export default ProductContext

//?sending data productcontext.jsx to cart.jsx with the help of context api
import React, { createContext } from 'react'
import Cart from '../Cart'

export let MultiApi = createContext()
//console.log(MultiApi)

const ProductContext = () => {

    let name = "Hema Srivalli"
    let age = 24
    let designation = "developer"

  return (
    <MultiApi.Provider value= {{name,age,designation}}>
        <Cart />
    </MultiApi.Provider>
  )
}

export default ProductContext