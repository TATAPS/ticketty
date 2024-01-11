import React from 'react';
import './Dashboard.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

export const Dashboard = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  )
}
