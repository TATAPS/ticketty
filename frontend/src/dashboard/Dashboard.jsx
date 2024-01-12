import React from 'react';
import './Dashboard.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Tickets from '../tickets/Tickets';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle"></div>
          <Tickets />
        </div>
      </div>
    </div>
  )
}
