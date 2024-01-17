import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Login() {
  const [active, setActive] = useState(false)

  return (
    <div className={active ? "container active" : "container"} id="container">
      {/* SIGN_UP */}
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
      {/* SIGN_IN */}
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
      {/* TOGGLE_CONTAINER */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={() => setActive(false)}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register" onClick={() => setActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login

