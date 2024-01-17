import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import Login from "../auth/Login";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="right-side">
          <h1>Dashboard</h1>
        </div>
        <div className="left-side">
          <div className="item">
            <LanguageIcon className="icon" />
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <EmailIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div >
            <Link to="/auth/login" className="auth">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
