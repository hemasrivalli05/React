//! life cycle methods
//shortcut CBC ---> rcc

import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild';

class LifeCycleParent extends Component {

  constructor() {
    super()
    this.state = {
      employee: "Abhii"
    }
    console.log("constructor is calling...");
  }

  static getDerivedStateFromProps() {
    console.log("static getDerivedStateFromProps is calling...");
    return null;
  }

  //it will check whether particular render or not
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate is calling...**");
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate is calling...**");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount is calling...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is calling...");
  }

  changeStateValue = () => {
    this.setState({ employee: "siri" })
  }

  render() {
    console.log("render is calling...")
    // console.log(this);//current CBC
    return (
      <>
        <h1> Employee name - {this.state.employee}</h1>
        {/* <h1>{this.state.employee === "Abhii"?<LifeCycleChild/>:<></>}</h1> */}
        <button onClick={this.changeStateValue}>Change</button>
      </>
    );
  }
}

export default LifeCycleParent;