import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <Link to="/auth/register">
        <h1>Login</h1>
      </Link>

    </div>

  )
}

export default Login
