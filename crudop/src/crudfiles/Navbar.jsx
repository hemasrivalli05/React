import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate = useNavigate()

  let token = localStorage.getItem("TOKEN")
  console.log(token);

  let email = localStorage.getItem("EMAIL")
  console.log(email);

  let handleLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/login")
  }
  return (
    <nav>
      <div>
        <span className='crud'>Crud</span>
        <span className='oper'>Operation</span>
      </div>

      {
        token ? (
          <div className='form-group'>
            <span className='user-email'>{email}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : <div className='regilogin'>
          <Link to="/register" className='nav-link'>Register</Link>
          <Link to="/login" className='nav-link'>Login</Link>
        </div>
      }
    </nav >
  )
}

export default Navbar