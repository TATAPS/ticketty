import './Auth.css'
import { useState } from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';

function Auth() {
  const [active, setActive] = useState(false)

  return (
    <div className='auth-container'>
      <div id="container" className={active ? "container active" : "container"}>
        {/* SIGN_IN */}
        <Login />
        {/* SIGN_UP */}
        <Register />
        {/* TOGGLE_CONTAINER */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button onClick={() => setActive(false)}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button onClick={() => setActive(true)}>About</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

