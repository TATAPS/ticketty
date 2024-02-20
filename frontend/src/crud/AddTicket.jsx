import "./AddTicket.css";
import { useState } from "react";
import TicketForm from "./TicketForm.jsx";
import { useNavigate } from "react-router-dom";
import useCompanies from "../../hooks/useCompanies.jsx";
import useStatuses from "../../hooks/useStatuses.jsx";
import useEngineers from "../../hooks/useEngineers.jsx";
import useAddContact from "../../hooks/useContacts.jsx";
import useAddTicket from "../../hooks/useAddTicket.jsx";
import usePriorities from "../../hooks/usePriorities.jsx";

export default function AddTicket() {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({
    priority: "P3 Low",
    company_id: "",
    owner_id: "",
    engineer_id: "",
    title: "",
    status: "Open",
  });

  const { isFetching, data: companies } = useCompanies();
  const { data: priorities } = usePriorities();
  const { data: statuses } = useStatuses();
  const { data: engineers } = useEngineers();
  const { data: contacts } = useAddContact(ticket);
  const addTicketMutation = useAddTicket();

  const handleCompanyChange = (e) => {
    const filteredCompany = companies.filter(
      (company) => company.name === e.target.value
    );
    setTicket({
      ...ticket,
      company_id: filteredCompany[0]["ein_tin"],
    });
  };

  const handleContactChange = (e) => {
    const filteredContact = contacts.filter(
      (contact) => contact.contact === e.target.value
    );
    setTicket({
      ...ticket,
      owner_id: filteredContact[0]["person_uuid"],
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

  const handleInputChange = (e) => {
    e.preventDefault();
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTicket = (ticket) => {
    addTicketMutation.mutate({
      ...ticket,
    });
    navigate("/");
  };

  if (isFetching) {
    <div>Loading...</div>;
  }

  if (companies) {
    return (
      <div className="list-container">
        <div className="ticket-details">
          <h1>New Ticket</h1>
          <TicketForm
            initValuesCompanies={{ companies }}
            initValuesPriorities={{ priorities }}
            initValuesContacts={{ contacts }}
            initValuesStatuses={{ statuses }}
            initValuesEngineers={{ engineers }}
            ticket={ticket}
            setTicket={setTicket}
            onSubmit={handleAddTicket}
            handleCompanyChange={handleCompanyChange}
            handleContactChange={handleContactChange}
            handleEngineerChange={handleEngineerChange}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    );
  }
  // return <div> Hello There Neighbor</div>;
}
