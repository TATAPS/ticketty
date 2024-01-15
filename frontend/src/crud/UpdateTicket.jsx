import React from 'react';
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";

function UpdateTicket() {
  const [ticket, setTicket] = useState({
    companyName: "",
    description: ""
  });
  const [error, setError] = useState(false);
  //////////////// TODO: EXTRACT PARAMS ID: default type: string //////////////////////
  let { ticketId } = useParams();

  const handleChange = (e) => {
    // setTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log({ [e.target.name]: e.target.value })
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("delete ticket");
  };
  return (
    <div>
      <input type="text" placeholder='companyName' onChange={handleChange} name="companyName" />
      <input type="text" placeholder='description' onChange={handleChange} name="description" />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">View All Tickets</Link>
    </div>
  )
}

export default UpdateTicket
