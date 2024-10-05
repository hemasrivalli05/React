import React, { Component } from 'react'

class LifeCycleChild extends Component {

    componentWillUnmount(){
        console.log("Child component will unmount======");
    }

  render() {
    return <>LifeCycleChild</>  
  }
}

export default LifeCycleChild;

