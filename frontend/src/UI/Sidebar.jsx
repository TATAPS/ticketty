import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/engineers";

function Sidebar({ onShow, isOpen }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser()
    navigate('/auth/login')
  }

  return (
    <aside style={{ display: isOpen ? "block" : "none" }}>
      <div className="sidebar-main">
        <div className="sidebar-toggle">
          {/* <div class="logo">
              <h1>TICKETTY</h1>
            </div> */}
          <div className="close" onClick={onShow}>
            <span className="material-icons-sharp">
              <CloseOutlinedIcon />
            </span>
          </div>
        </div>
        <Link to="/" className="link">
          <span className="material-icons-sharp">
            <DashboardIcon />
          </span>
          <h4>Dashboard</h4>
        </Link>
        <a href="#">
          <span className="material-icons-sharp">
            <AccountCircleIcon />
          </span>
          <h4>Users</h4>
        </a>
        <a href="#">
          <span className="material-icons-sharp">
            <HistoryOutlinedIcon />
          </span>
          <h4>History</h4>
        </a>
        <a href="#" className="active">
          <span className="material-icons-sharp">
            <AutoGraphOutlinedIcon />
          </span>
          <h4>Analytics</h4>
        </a>
        <Link to="/addticket" className="link">
          <span className="material-icons-sharp">
            <ControlPointIcon />
          </span>
          <h4>New Tickets</h4>
          <span className="message-count">27</span>
        </Link>
        <a href="#">
          <span className="material-icons-sharp">
            <SettingsIcon />
          </span>
          <h4>Settings</h4>
        </a>
        <Link to="/auth" className="link">
          <span className="material-icons-sharp">
            <LoginOutlinedIcon />
          </span>
          <h4>Login</h4>
        </Link>
        <Link to="/auth/logout" className="link" onClick={handleLogout}>
          <span className="material-icons-sharp">
            <LogoutOutlinedIcon />
          </span>
          <h4>Logout</h4>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
