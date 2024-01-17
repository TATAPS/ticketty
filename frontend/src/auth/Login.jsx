import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Login() {


  return (
    <div className="form-container sign-in">
      <form action="">
        <h1>Sign In</h1>
        <div className="social-icons">
          <GoogleIcon className='icon' />
          <FacebookIcon className='icon' />
          <GitHubIcon className='icon' />
          <LinkedInIcon className='icon' />
        </div>
        <span>or use your email and password</span>
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <a href="#">Forgot Your Password?</a>
        <Link to="/auth/login">
          <button>Sign In</button>
        </Link>
      </form>
    </div>
  )
}

export default Login

