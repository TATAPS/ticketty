import React, { useState } from 'react';
import './Dashboard.css';
import Tickets from '../tickets/Tickets.jsx';

export const Dashboard = () => {
  return (
    <div className="list-container">
      <div className="list-title">
        <Tickets />
      </div>
    </div>
  )
}
