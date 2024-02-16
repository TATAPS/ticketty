import "./UpdateTicket.css"
import { useState } from 'react';
import { useParams } from "react-router-dom";
import TicketForm from "./TicketForm.jsx";
import useCompanies from "../../hooks/useCompanies.jsx";
import useStatuses from "../../hooks/useStatuses.jsx";
import useEngineers from "../../hooks/useEngineers.jsx";
import useAddContact from "../../hooks/useContacts.jsx";
import useUpdateTicket from "../../hooks/useUpdateTicket.jsx";
import useCurrentTicket from "../../hooks/useCurrentTicket.jsx";


function UpdateTicket() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState({});
  const { isFetching, data: ticketData } = useCurrentTicket(ticketId)
  const { data: companies } = useCompanies()
  const { data: statuses } = useStatuses()
  const { data: engineers } = useEngineers()
  const { data: contacts } = useAddContact(ticket)
  const updateTicketMutation = useUpdateTicket(ticketId)

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
      </div>
    </div>
  );
}
export default UpdateTicket;
