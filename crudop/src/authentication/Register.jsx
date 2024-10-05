import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Register = () => {

  let navigator = useNavigate()

  let [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    profpic: ""
  });

  let { email, password, profpic } = registerData;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value })
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    let payload = { email, password, profpic }
    await axios.post("http://localhost:5000/registerusers", payload)
    navigator("/login")
    toast.success("Register successfully")
  }
  return (
    <section className='form-content'>
      <main className='inner-content'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder='enter email' name='email' value={email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder='enter password' name='password' value={password} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Profile pic </label>
            <input type="text" placeholder='enter pic url' name='profpic' value={profpic} onChange={handleChange} />
          </div>

          <div className="form-group">
            <button>Register</button>
          </div>
        </form>
      </main>
    </section>
  )
}

export default Register