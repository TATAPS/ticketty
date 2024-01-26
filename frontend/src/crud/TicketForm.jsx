import './TicketForm.css'
import React, { useState, useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom';

function TicketForm({ onSubmit, initialValue }) {
  const [ticket, setTicket] = useState({
    title: initialValue.title || "test FE",
    company_id: initialValue.company_id || "40-2522401",
    status: initialValue.status || "Open",
    owner_id: initialValue.status || "11eeb505-16a3-6017-8584-001fbc130d5b"
  })

  const handleChangeInput = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value
    })
  }

  const renderInput = (label) => (
    <div>
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={ticket[label.toLowerCase()]} />
    </div>
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ticket);
    setTicket({
      title: "",
      company_id: "",
      status: "",
      owner_id: ""
    });
    // navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderInput('Title')}
      {renderInput('Company_ID')}
      {renderInput('Status')}
      {renderInput('Owner_id')}
      <button type="submit">Submit</button>
    </form>
  )
}

export default TicketForm
