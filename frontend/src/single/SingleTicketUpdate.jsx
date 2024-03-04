import "./SingleTicket.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useTicket from "../../hooks/useTicket.jsx";
import { useNavigate } from "react-router-dom";
// import useAddTicket from "../../hooks/useAddTicket.jsx";
import useUpdateTicket from "../../hooks/useUpdateTicket.jsx";
// import RenderDropDown from "../../reusable-components/RenderDropDown.jsx";
import RenderInputTypeText from "../../reusable-components/RenderInputTypeText.jsx";
import useCompanies from "../../hooks/useCompanies.jsx";
import useStatuses from "../../hooks/useStatuses.jsx";
import useEngineers from "../../hooks/useEngineers.jsx";
import useAddContact from "../../hooks/useContacts.jsx";
import useAddTicket from "../../hooks/useAddTicket.jsx";
import usePriorities from "../../hooks/usePriorities.jsx";
import { updateTicket } from "../api/tickets.jsx";
import RenderDropDownUpdate from "../../reusable-components/RenderDropDownUpdate.jsx";
import SingleTicketDetails from "./SingleTicketDetails.jsx";
import SingleTicketNotes from "./SingleTicketNotes.jsx";

function SingleTicketUpdate({ ticketData, notesData }) {
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    ...ticketData[0],
    newNote: "",
  });
  const [notes, setNotes] = useState(notesData);

  let { ticketId } = useParams();
  console.log("ticketid", ticketId);
  const { isFetching, data: companies } = useCompanies();
  const { data: priorities } = usePriorities();
  const { data: statuses } = useStatuses();
  const { data: engineers } = useEngineers();
  const { data: contacts } = useAddContact(ticket);

  const updateTicketMutation = useUpdateTicket();

  const handleInputChange = (e) => {
    e.preventDefault();
    setTicket({
      ...ticket,
      note_creator_id: ticket.engineer_uuid,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotesChange = (e) => {
    e.preventDefault();
    setNotes({
      ...notes,
      [e.target.name]: e.target.value,
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

  const handleAddTicket = (ticket) => {
    setTicket({
      ...ticket,
      note_creator_id: ticket.engineer_uuid,
    });
    updateTicketMutation.mutate({
      ...ticket,
    });
    setTicket({
      newNote: "",
      note_creator_id: "",
    });
    navigate("/");
  };

  const handleCompanyChange = (e) => {
    const filteredCompany = companies.filter(
      (company) => company.name === e.target.value
    );
    setTicket({
      ...ticket,
      company_id: filteredCompany[0]["ein_tin"],
      company: e.target.value,
      contact: "Choose a contact",
      phone: "",
      email: "",
    });
  };

  const handleContactChange = (e) => {
    const filteredContact = contacts.filter(
      (contact) => contact.contact === e.target.value
    );
    setTicket({
      ...ticket,
      owner_id: filteredContact[0]["person_uuid"],
      contact: e.target.value,
      phone: filteredContact[0]["phone"],
      email: filteredContact[0]["email"],
    });
  };
  console.log("====================================");
  console.log("= Starting SingleTicketUpdate.jsx =");
  console.log("====================================");
  console.log("tickets", ticket);
  console.log("notes", notes);
  console.log("notes.note", notes.length);
  console.log("companies", companies);
  console.log("contacts", contacts);
  return (
    <>
      <div className="ticket-summary">
        <SingleTicketDetails
          ticket={ticket}
          notes={notes}
          companies={companies}
          engineers={engineers}
          statuses={statuses}
          priorities={priorities}
          contacts={contacts}
          handleCompanyChange={handleCompanyChange}
          handleContactChange={handleContactChange}
          handleEngineerChange={handleEngineerChange}
          handleInputChange={handleInputChange}
        />
        <div className="ticket-notes">
          <SingleTicketNotes
            ticket={ticket}
            notes={notes}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className="edit-section">
        <button onClick={() => handleAddTicket(ticket)}>Save</button>
      </div>
    </>
  );
}

export default SingleTicketUpdate;
