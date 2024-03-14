import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login.jsx";
import { Dashboard } from "./dashboard/Dashboard.jsx";
import Sidebar from "./UI/Sidebar.jsx";
import Navbar from "./UI/Navbar.jsx";
import AddTicket from "./crud/AddTicket.jsx";
import UpdateTicket from "./crud/UpdateTicket.jsx";
import SingleTicket from "./single/SingleTicket.jsx";
import { logoutUser } from "./api/engineers.jsx";
import ProtectedRoutes from "./auth/ProtectedRoutes.jsx";
import getCookie from "../helpers/getCookie.js";
import LandingPage from "./UI/LandingPage.jsx";
import Admin from "./admin/Admin.jsx";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const user = getCookie("username=");
  console.log("user", user);
  return (
    <div className="App">
      <div className="dashboard">
        <Sidebar isOpen={isMenuOpen} onShow={handleMenuClick} />
        <div className="dashboard-container">
          <Navbar isOpen={isMenuOpen} onShow={handleMenuClick} />
          <Routes>
            <Route path="auth/login" element={<Login />} />
            <Route element={<ProtectedRoutes user={user} />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="addticket" element={<AddTicket />} />
              <Route path="tickets/:ticketId" element={<SingleTicket />} />
              <Route path="tickets/:ticketId/edit" element={<UpdateTicket />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="/home" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
