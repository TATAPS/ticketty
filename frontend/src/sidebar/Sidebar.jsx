import "./Sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ticketty</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">User</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>My Account</span>
          </li>
          <p className="title">Tickets</p>
          <li>
            <ControlPointIcon className="icon" />
            <span>New Ticket</span>
          </li>
          <li>
            <ConfirmationNumberIcon className="icon" />
            <span>All Tickets</span>
          </li>
          <p className="title">Systems Control</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  )
}

export default Sidebar
