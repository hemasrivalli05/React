// import React, {Component} from 'react';

// class NormalChild extends Component {
//     render() {
//         console.log("Normal child is rendering...")
//         return (
//             <>
//                 <h1> NormalChild---{this.props.course}</h1>

//             </>
//         );
//     }
// }
// export default NormalChild
//! memo
import React from 'react'

const NormalChild = (props) => {
    // console.log(props)
    console.log("normal child is rendering...")
  return (
    <>
        <h1>NormalChild --{props.training}</h1>
    </>
  )
}

export default NormalChild