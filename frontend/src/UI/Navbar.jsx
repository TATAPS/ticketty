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

function Navbar({ onShow, isOpen }) {
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
          <div className="dark-mode">
            <span className="material-icons-sharp active">
              <DarkModeIcon />
            </span>
            <span className="material-icons-sharp">
              <LightModeOutlinedIcon />
            </span>
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
