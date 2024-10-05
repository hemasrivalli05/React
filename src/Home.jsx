import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const Home = () => {

  let [employee, setEmployee] = useState({
    ename: "",//name of employee
    email: ""
  })

  let { ename, email } = employee

  let navigate = useNavigate()

  //!changing the title
  useEffect(() => {
    document.title = "ADDING HOME PAGE"
  })

  let handleInput = (e) => {
    // console.log(e);
    let { name, value } = e.target
    setEmployee({ ...employee, [name]: value })//wrap in []
  }

  //e-SBE
  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      let payload = { ename, email }
      axios.post("http://localhost:5000/employee", payload)
      navigate("/viewall")
      toast.success('Successfully Added!')
    } catch (e) {
      console.log(e);
    } finally {
      setEmployee({ ename: "", email: "" })
    }

  }

  return (
    <>
      <section>
        <h1>WELCOME TO HOME PAGE</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="enter emplyee's name" value={ename} name='ename' onChange={handleInput} required />
          </div>
          <div>
            <input type="email" placeholder='enter employes email' value={email} name='email' onChange={handleInput} required />
          </div>
          <div>
            <button>ADD EMPLOYEE</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Home

//! toaster--> npm add react-hot-toast