import React from 'react';
import './Dashboard.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Tickets from '../tickets/Tickets';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="list-container">
          <div className="list-title"></div>
          <Tickets />
        </div>
      </div>
    </div>
  )
}
