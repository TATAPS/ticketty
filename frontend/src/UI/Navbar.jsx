import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Login from "../auth/Login";
import getCookie from "../../helpers/getCookie";
import { useState, useEffect } from "react";

function Navbar({ onShow, isOpen }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [active, setActive] = useState(false)

  useEffect(() => {
    const darkModeElement = document.querySelector('.dark-mode');

    const handleDarkModeToggle = () => {
      document.body.classList.toggle('dark-mode-variables');
      darkModeElement.querySelector('span:nth-child(1)').classList.toggle('active');
      darkModeElement.querySelector('span:nth-child(2)').classList.toggle('active');
      setIsDarkMode(prevState => !prevState);
    };

    darkModeElement.addEventListener('click', handleDarkModeToggle);

    return () => {
      darkModeElement.removeEventListener('click', handleDarkModeToggle);
    };
  }, []);

  const cookies = getCookie("username=");
  console.log("cookies", cookies);
  return (
    <div className="right-section">
      <div className="nav">
        <button id="" onClick={onShow}>
          {/* <span className="material-icons-sharp"> */}
          <MenuOutlinedIcon />
          {/* </span> */}
        </button>

        <div className="profile">
          <div className={active ? "dark-mode active" : "dark-mode"} >
            {active ? (
              <span onClick={() => setActive(false)} >
                <LightModeOutlinedIcon className="dark" />
              </span>
            ) : (
              <span className={`${isDarkMode ? 'active' : ''}`} onClick={() => setActive(true)}>
                <DarkModeIcon className="light" />
              </span>
            )}
          </div>
          <div className="info">
            <p>
              Hey, <b>{cookies ? cookies : "Name"}</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// className={`${isDarkMode ? 'active' : ''}`}
