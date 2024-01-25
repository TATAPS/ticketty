import "./Sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ onShow, isOpen }) {
  return (
    <aside style={{ display: isOpen ? 'block' : 'none' }}>

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
        <a href="#">
          <span className="material-icons-sharp">
            <DashboardIcon />
          </span>
          <h3>Dashboard</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">
            <AccountCircleIcon />
          </span>
          <h3>Users</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">
            <HistoryOutlinedIcon />
          </span>
          <h3>History</h3>
        </a>
        <a href="#" className="active">
          <span className="material-icons-sharp">
            <AutoGraphOutlinedIcon />
          </span>
          <h3>Analytics</h3>
        </a>
        <Link to="/addticket" className="link">
          <span className="material-icons-sharp">
            <ControlPointIcon />
          </span>
          <h3>New Tickets</h3>
          <span className="message-count">27</span>
        </Link>
        <a href="#">
          <span className="material-icons-sharp">
            <ControlPointIcon />
          </span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">
            <SettingsIcon />
          </span>
          <h3>Settings</h3>
        </a>
        <Link to="/auth" className="link">
          <span className="material-icons-sharp">
            <LoginOutlinedIcon />
          </span>
          <h3>Login</h3>
        </Link>
        <a href="#">
          <span className="material-icons-sharp">
            <LogoutOutlinedIcon />
          </span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
