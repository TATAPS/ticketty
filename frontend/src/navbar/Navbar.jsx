import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Login from "../auth/Login";


function Navbar({ onShow, isOpen }) {
  console.log(isOpen);
  return (
    // <div className="navbar">
    //   <div className="wrapper">
    //     <div className="right-side">
    //       <h1>Dashboard</h1>
    //     </div>
    //     <div className="left-side">
    //       <div className="item">
    //         <LanguageIcon className="icon" />
    //       </div>
    //       <div className="item">
    //         <DarkModeIcon className="icon" />
    //       </div>
    //       <div className="item">
    //         <NotificationsIcon />
    //         <div className="counter">1</div>
    //       </div>
    //       <div className="item">
    //         <ChatIcon className="icon" />
    //         <div className="counter">1</div>
    //       </div>
    //       <div className="item">
    //         <EmailIcon className="icon" />
    //         <div className="counter">1</div>
    //       </div>
    //       <div >
    //         <Link to="/auth" className="login">Login</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="right-section">
      <div className="nav">

        <button id="menu-btn" onClick={onShow}>
          <span className="material-icons-sharp">
            <MenuOutlinedIcon />
          </span>
        </button>
        <div className="dark-mode">
          <span className="material-icons-sharp active">
          </span>
          <span className="material-icons-sharp">
          </span>
        </div>

        <div className="profile">
          <div className="info">
            <p>Hey, <b>Name</b></p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
