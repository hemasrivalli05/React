import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Login = () => {

  let navigate = useNavigate()

  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
    token: uuidv4()
  })

  let { email, password, token } = loginData

  let handleChange = (e) => {
    let { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()

    let { data } = await axios.get("http://localhost:5000/registerusers")
    let filteredData = data.filter((val) => {
      return val.email === email && val.password === password
      // return val.email === loginData.email && val.password === loginData.password
    })
    if (filteredData.length > 0) {
      navigate("/showusers")
      localStorage.setItem("TOKEN", token)
      localStorage.setItem("EMAIL", email) 
      toast.success("Successfully logged in")
    } else {
      navigate("/register")
      toast.error("not registered or wrong id ")
    }
  }

  return (
    <section className='form-content'>
      <main className='inner-content'>
        <h1>login</h1>
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
            <button>Login</button>
          </div>
        </form>
      </main>
    </section>
  )
}

export default Login