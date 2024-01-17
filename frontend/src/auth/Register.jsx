import './Register.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  return (
    <div className="form-container sign-up">
      <form action="">
        <h1>Create Account</h1>
        <div className="social-icons">
          <GoogleIcon className='icon' />
          <FacebookIcon className='icon' />
          <GitHubIcon className='icon' />
          <LinkedInIcon className='icon' />
        </div>
        <span>or use your email for registration</span>
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <Link to="/auth/register">
          <button>Sign Up</button>
        </Link>
      </form>
    </div>
  )
}

export default Register
