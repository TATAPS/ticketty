import './Register.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import jackie from "../../../images/jackie.png"
function Register() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  return (
    <div className="form-container sign-up">
      <form action="" className='about'>
        <div className="profile">
          <div className="info">
            {/* *****************INPUT YOUR PROFILE PICTURE ****************  */}
            {/* <a href="#">
          <img
            alt="profile"
            src="jackie.png"
          />
        </a> */}
            {/***************** TEMP *****************/}
            <AccountCircleIcon sx={{ fontSize: '6rem' }} />
            <h2>Tim Janssen</h2>
          </div>
          <span>I'm actively exploring exciting opportunities in the field of Software Engineering. If you happen to have any cool projects or ideas you'd like to chat about, I'm all ears and eager to hear more!</span>
          <div className="social-icons">
            <GoogleIcon className='icon' />
            <GitHubIcon className='icon' />
            <LinkedInIcon className='icon' />
          </div>
          {/* <Link to="">
          <button>Profile Page</button>
        </Link> */}
        </div>

        <div className="profile">
          <div className="info">
            <a href="#">
              <img
                alt="profile"
                src={jackie}
              />
            </a>
            <h2>Jackie Nguyen</h2>
          </div>
          <span>I'm actively exploring exciting opportunities in the field of Software Engineering. If you happen to have any cool projects or ideas you'd like to chat about, I'm all ears and eager to hear more!</span>
          <div className="social-icons">
            <Link to="mailto:trangn2130@gmail.com">
              <GoogleIcon className='icon' />
            </Link>
            <Link to="https://github.com/jackie-ng/">
              <GitHubIcon className='icon' />
            </Link>
            <Link to="https://www.linkedin.com/in/jackie-ng303/#/">
              <LinkedInIcon className='icon' />
            </Link>
          </div>
          {/* <Link to="https://jackienguyen.me">
          <button>Profile Page</button>
        </Link> */}
        </div>
        {/*<input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" /> */}
      </form>
    </div>
  )
}

export default Register
