// import React from 'react'

// //? inorder to receive another component as a value pass a parameter. Here "Wrapper" first letter "W" is in capital to receive (store) the component
// const Hoc = (Wrapper) => {

//     //! inner newcomponent modify the received component by passing the common logic
//     const NewComponent = () => {
//         return <Wrapper username="PavanKalyan" />
//         //CompoA,CompB
//     }

//     return NewComponent;

// }

// export default Hoc

// //!CompoA acting as a "argument for Hoc" it will be received  at "Wrapper "

//?Task --- increement the value by 1 moving the cursor upon the btn

//comon logic
import React, { useState } from 'react'

const Hoc = (Wrapper) => {

    //passing common logic
    const EnhancedCompo = () => {

        let [count, setCount] = useState(0)

        let increement = () => {
            setCount(count + 1)
        }
        let decreement = () => {
            setCount(count - 1)
        }
        let reset = () => {
            setCount(0)
        }

        return <Wrapper commonlogic={{count, increement , decreement , reset}} /> //compA,compB
    }
    return EnhancedCompo;
}

export default Hoc