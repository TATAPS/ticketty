import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function AddTicket() {
  const [ticket, setTicket] = useState({
    companyName: "",
    description: ""
  })

  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setTicket(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    // TODO: FETCH_DATA_HERE
    // try {

    // } catch (error) {
    // }
  }

  console.log(ticket);
  return (
    <div className='add-ticket'>
      <h1>Add New Ticket</h1>
      <input type="text" placeholder='companyName' onChange={handleChange} name="companyName" />
      <input type="text" placeholder='description' onChange={handleChange} name="description" />
      <button onClick={handleClick}>Add Ticket</button>
    </div>
  );
}


