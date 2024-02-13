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
import RenderInputTypeText from "../../reusable-components/RenderInputTypeText.jsx";


function UpdateTicket() {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [ticket, setTicket] = useState({});

  const { isFetching, data: ticketData } = useQuery({
    queryKey: ['tickets', (ticketId)],
    queryFn: () => fetchTicket(ticketId),
    onCompleted: () => {
      const initialTicket = ticketData[0] || {};
      setTicket(initialTicket)
    },
  });
  console.log("ticketData", ticketData);
  console.log("ticket", ticket)
  const { data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => await fetchCompanies(),
  });

  const { data: statuses } = useQuery({
    queryKey: ["statuses"],
    queryFn: async () => await fetchStatuses(),
  });

  const { data: contacts } = useQuery({
    queryKey: ["contacts", ticket?.company_id],
    enabled: ticket?.company_id !== "",
    queryFn: async () => await fetchCompanyContacts(ticket?.company_id),
  });

  const { data: engineers } = useQuery({
    queryKey: ["engineers"],
    queryFn: async () => await fetchEngineers(),
  });
  // console.log(engineers);
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

  const handleCompanyChange = (e) => {
    const filteredCompany = companies.filter(
      (company) => company.name === e.target.value
    );
    setTicket({
      ...ticket,
      company_id: filteredCompany[0]["ein_tin"],
    })
  }

  const handleContactChange = (e) => {
    const filteredContact = contacts.filter(
      (contact) => contact.contact === e.target.value
    );
    setTicket({
      ...ticket,
      contact: filteredContact[0]["contact"],
    });
  };
  const handleStatusChange = (e) => {
    const filteredStatus = statuses.filter(
      (status) => status.status === e.target.value
    );
    // console.log(filteredStatus)
    setTicket({
      ...ticket,
      status: filteredStatus[0]["status"],
    });
  };
  const handleEngineerChange = (e) => {
    e.preventDefault();
    const filteredEngineer = engineers.filter(
      (engineer) => engineer.contact === e.target.value
    );
    setTicket({
      ...ticket,
      engineer_id: filteredEngineer[0]["id"],
    });
  };
  const handleSubmit = () => {
    updateTicketMutation.mutate({
      id: ticketId,
      title: ticket.title,
      company_id: ticket.company_id,
      status: ticket.status,
      engineer_id: ticket.engineer_id,
      contact: ticket.contact
    })
  };

  if (isFetching) {
    <div>Loading...</div>;
  }

  return (
    <div className="list-container">
      <h1>Update #{ticketId}</h1>
      <div className="list-title">
        <TicketForm
          initValuesCompanies={{ companies }}
          initValuesContacts={{ contacts }}
          initValuesStatuses={{ statuses }}
          initValuesEngineers={{ engineers }}
          ticket={ticket}
          setTicket={setTicket}
          onSubmit={handleSubmit}
          handleCompanyChange={handleCompanyChange}
          handleStatusChange={handleStatusChange}
          handleContactChange={handleContactChange}
          handleInputChange={handleInputChange}
          handleEngineerChange={handleEngineerChange}
        />
        {/* <button onClick={handleSubmit}>Update</button> */}
      </div>
    </div>
  );
}
export default UpdateTicket;
