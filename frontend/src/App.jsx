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

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <div className="App">
      <div className="dashboard">
        <Sidebar isOpen={isMenuOpen} onShow={handleMenuClick} />
        <div className="dashboard-container">
          <Navbar isOpen={isMenuOpen} onShow={handleMenuClick} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="addticket" element={<AddTicket />} />
            <Route path="tickets/:ticketId" element={<SingleTicket />} />
            <Route path="tickets/:ticketId/edit" element={<UpdateTicket />} />
            <Route path="auth/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
