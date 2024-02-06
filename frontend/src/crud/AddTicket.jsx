import "./AddTicket.css";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTicket, fetchTickets } from "../api/tickets";
import TicketForm from "./TicketForm.jsx";
import { useNavigate } from "react-router-dom";
import { fetchCompanies, fetchCompanyContacts } from "../api/companies.jsx";
import { TicketForm2 } from "./TicketForm2.jsx";
// import { getAllCompanies } from "../../../backend/api/models/companies_model.js";

export default function AddTicket() {
  const [ticket, setTicket] = useState({
    company_id: "",
    owner_id: "",
    title: "",
    status: "Open",
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isFetching, data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => await fetchCompanies(),
  });

  const { isFetching: contactFetching, data: contacts } = useQuery({
    queryKey: ["contacts", ticket?.company_id],
    enabled: ticket?.company_id != null,
    queryFn: async () => await fetchCompanyContacts(ticket?.company_id),
  });

  const addTicketMutation = useMutation({
    mutationFn: addTicket,
    onSuccess: (newTicket) => {
      queryClient.invalidateQueries({ queryKey: ["tickets"], newTicket });
    },
  });

  const onHandleChangeCompany = (e) => {
    const filteredCompany = companies.filter(
      (company) => company.name === e.target.value
    );
    setTicket({
      ...ticket,
      company_id: filteredCompany[0]["ein_tin"],
    });
  };

  const onHandleChangeContact = (e) => {
    const filteredContact = contacts.filter(
      (contact) => contact.contact === e.target.value
    );
    console.log(filteredContact);
    setTicket({
      ...ticket,
      owner_id: filteredContact[0]["person_uuid"],
    });
  };

  const onHandleInputChange = (e) => {
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

  // if (companies && contacts) {
  if (companies) {
    console.log("yay", companies);
    // console.log("yay contacts", contacts);
    return (
      <div className="list-container">
        <div className="ticket-details">
          <h1>New Ticket</h1>
          <TicketForm2
            setTicket={setTicket}
            onSubmit={handleAddTicket}
            onHandleChange={onHandleChangeCompany}
            onHandleChangeContact={onHandleChangeContact}
            onHandleInputChange={onHandleInputChange}
            initalValues1={{ companies }}
            initialValues2={{ contacts }}
            ticket={ticket}
          ></TicketForm2>
          {/* <TicketForm onSubmit={handleAddTicket} initialValue={{ data }} /> */}
        </div>
      </div>
    );
  }
}
// }

// const userQuery = useQuery({

// queryKey: ["users", postQuery?.data?.userId],
// enabled: postQuery?.data?.userId != null,
// queryFn: () => getUser(postQuery.data.userId)
// })

// { postQuery.data.userId}
// {userQuery.isLoading
// ? "Loading User..."
// userQuery.isError
// ? "Error loading user"
// : userQuery.data.name //returns userQuery.data.name if not loading and no errors
//}
