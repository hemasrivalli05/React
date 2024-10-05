// import React, { Component } from 'react';
// import NormalChild from './NormalChild';
// import PureChild from './PureChild';

// class PureParent extends Component {

//     constructor() {
//         super()
//         this.state = {
//             tech: "front end"
//         }
//     }

//     changeTech = () => {
//         this.setState({ tech: "database" })
//     }
//     render() {
//         // console.log(this);
//         console.log("parent is rendering....");
//         return (
//             <>
//                 <h1>Parent---{this.state.tech}</h1>
//                 <NormalChild course={this.state.tech} />
//                 <PureChild course={this.state.tech} />
//                 <button onClick={this.changeTech}>change</button>
//             </>
//         )
//     }
// }
// export default PureParent

//! memo()
import React, {useState} from 'react'
import PureChild from './PureChild'
import NormalChild from './NormalChild'

const PureParent = () => {

    let[institute, setInstitute] = useState({
        iname:"qspiders"
    })
    console.log("parent is rendering...");
  return (
    <>
        <h1>parent--{institute.iname}</h1>
        <NormalChild training ={institute.iname}/>
        <PureChild training ={institute.iname}/>
        <button onClick={() => setInstitute({iname: "jspiders" })}>change</button>
    </>
  );
}

export default PureParent