import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
function TicketForm({ onSubmit, initialValue }) {
  const [ticket, setTicket] = useState({
    title: initialValue.title || "test FE",
    company_id: initialValue.company_id || "40-2522401",
    status: initialValue.status || "Open"
  })
  // const navigate = useNavigate()
  const handleChangeInput = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value
    })
  }

  const renderField = (label) => (
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
      status: ""
    });
    // navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Title')}
      {renderField('Company_ID')}
      {renderField('Status')}
      <button type="submit">Submit</button>
    </form>
  )
}

export default TicketForm
