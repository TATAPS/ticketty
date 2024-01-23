import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Tickets from '../tickets/Tickets';

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
          <div className="list-title"></div>
          <Tickets />
        </div>
      </div>
    </div>
  )
}
