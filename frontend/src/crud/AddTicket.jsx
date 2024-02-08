import "./AddTicket.css";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTicket } from "../api/tickets";
import TicketForm from "./TicketForm.jsx";
import { useNavigate } from "react-router-dom";
import { fetchCompanies, fetchCompanyContacts } from "../api/companies.jsx";
import { fetchStatuses } from "../api/statuses.jsx";
import { fetchEngineers } from "../api/engineers.jsx";
import RenderDropDown from "../../reusable-components/RenderDropDown.jsx";

export default function AddTicket() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [ticket, setTicket] = useState({
    company_id: "",
    owner_id: "",
    engineer_id: "",
    title: "",
    status: "Open",
  });

  const { isFetching, data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => await fetchCompanies(),
  });

  const { data: statuses } = useQuery({
    queryKey: ["statuses"],
    queryFn: async () => await fetchStatuses(),
  });

  const { data: engineers } = useQuery({
    queryKey: ["engineers"],
    queryFn: async () => await fetchEngineers(),
  });

  const { data: contacts } = useQuery({
    queryKey: ["contacts", ticket?.company_id],
    enabled: ticket?.company_id !== "",
    queryFn: async () => await fetchCompanyContacts(ticket?.company_id),
  });

  const addTicketMutation = useMutation({
    mutationFn: addTicket,
    onSuccess: (newTicket) => {
      queryClient.invalidateQueries({ queryKey: ["tickets"], newTicket });
    },
  });

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
