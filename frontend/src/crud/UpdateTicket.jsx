import "./UpdateTicket.css"
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import TicketForm from "./TicketForm.jsx";
import { useNavigate } from "react-router-dom";
import { fetchTicket, updateTicket } from "../api/tickets.jsx";
import { fetchCompanies, fetchCompanyContacts } from "../api/companies.jsx";
import { fetchStatuses } from "../api/statuses.jsx";
import { fetchEngineers } from "../api/engineers.jsx";
function UpdateTicket() {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [ticket, setTicket] = useState({
    title: '',
  });

  const { data: ticketData } = useQuery({
    queryKey: ['tickets', ticketId],
    queryFn: () => fetchTicket(ticketId)
  });

  const updateTicketMutation = useMutation({
    mutationFn: updateTicket,
    onSuccess: (updatedTicket) => {
      queryClient.setQueryData({ queryKey: ['tickets', ticketId], ...updatedTicket });
      queryClient.invalidateQueries({ queryKey: ['ticketTitle'] });
      navigate(`/tickets/${ticketId}`); // Redirect to ticket details page after update
    }
  });

  const handleInputChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    updateTicketMutation.mutate({
      id: ticketId,
      title: ticket.title,
    })
  };

  return (
    <div className="list-container">
      <h1>Update #{ticketId}</h1>
      <div className="list-title">
        <input type="text" value={ticket.title} name="title" onChange={handleInputChange} />
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
}

export default UpdateTicket;
