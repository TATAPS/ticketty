import "./AddTicket.css";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTicket, fetchTickets } from "../api/tickets";
import TicketForm from "./TicketForm.jsx";
import { useNavigate } from "react-router-dom";
import { fetchCompanies, fetchCompanyContacts } from "../api/companies.jsx";
import { TicketForm2 } from "./TicketForm2.jsx";

export default function AddTicket() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isFetching,
    isError,
    data: companies,
    error,
  } = useQuery({
    queryKey: ["companies"],
    queryFn: () => fetchCompanies(),
  });

  const company_id = companies?.[0]?.["ein_tin"];
  const { data: contacts } = useQuery({
    queryKey: ["contacts", company_id],
    // queryFn: () => fetchCompanyContacts(companies[0]["ein_tin"]),
    queryFn: () => fetchCompanyContacts(company_id),
    enabled: !!company_id,
  });

  const addTicketMutation = useMutation({
    mutationFn: addTicket,
    onSuccess: (newTicket) => {
      queryClient.invalidateQueries({ queryKey: ["tickets"], newTicket });
    },
  });

  const handleAddTicket = (ticket) => {
    addTicketMutation.mutate({
      ...ticket,
    });
    navigate("/");
  };

  if (isFetching) {
    <div>Loading...</div>;
  }

  if (companies && contacts) {
    console.log("yay", companies);
    console.log("yay contacts", contacts);
    return (
      <div className="list-container">
        <div className="ticket-details">
          <h1>New Ticket</h1>
          <TicketForm2
            onSubmit={handleAddTicket}
            initalValues1={{ companies }}
            initialValues2={{ contacts }}
          ></TicketForm2>
          {/* <TicketForm onSubmit={handleAddTicket} initialValue={{ data }} /> */}
        </div>
      </div>
    );
  }
}
