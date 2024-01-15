import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  return (
    <div className='registerForm'>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <Link to="/auth/login">
        <h1>Login</h1>
      </Link>
    </div>
  )
}

export default Register
