import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTicket } from '../api/tickets';
import TicketForm from './TicketForm.jsx';
import { useNavigate } from 'react-router-dom';


export default function AddTicket() {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const addTicketMutation = useMutation({
    mutationFn: addTicket,
    onSuccess: (newTicket) => {
      queryClient.invalidateQueries({ queryKey: ['tickets'], newTicket });
      console.log("CREATED TICKET SUCCESSFULLY")
    },
  })

  const handleAddTicket = (ticket) => {
    addTicketMutation.mutate({
      ...ticket
    })
    navigate("/");
  }

  return (
    <div className='add-ticket'>
      <h1>Add New Ticket</h1>
      <TicketForm onSubmit={handleAddTicket} initialValue={{}} />
    </div>
  );
}


