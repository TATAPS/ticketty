import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { loginUser } from "../api/engineers";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: ["login"], user });
    },
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(user);
    loginMutation.mutate({
      ...user,
    });
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="social-icons">
          <GoogleIcon className="icon" />
          <FacebookIcon className="icon" />
          <GitHubIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
        <span>or use your email and password</span>
        <input
          onChange={handleInputChange}
          type="email"
          placeholder="username"
          name="username"
        />
        <input
          onChange={handleInputChange}
          type="password"
          placeholder="password"
          name="password"
        />
        <a href="#">Forgot Your Password?</a>
        <Link to="/auth/login">
          <button onClick={handleSubmit}>Sign In</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
