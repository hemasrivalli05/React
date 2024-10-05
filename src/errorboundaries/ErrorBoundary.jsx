import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  //returns updated state variable in the form of object
  static getDerivedStateFromError() {
    return{
      hasError:true
    }
  }

  componentDidCatch(error , info){
    console.log(error);
    console.log(info);
  }

  render() {
    console.log(this);
    if(this.state.hasError){
      return <h1>Please wait transaction is in process!!..</h1>
    }else{
      return this.props.children
    }
  }
}
export default ErrorBoundary;