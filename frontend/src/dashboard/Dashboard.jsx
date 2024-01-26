import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from '../UI/Sidebar.jsx';
import Navbar from '../UI/Navbar.jsx';
import Tickets from '../tickets/Tickets.jsx';

export const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className='dashboard'>
      <Sidebar isOpen={isMenuOpen} onShow={handleMenuClick} />
      <div className="dashboard-container">
        <Navbar isOpen={isMenuOpen} onShow={handleMenuClick} />
        <div className="list-container">
          <div className="list-title">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  )
}
