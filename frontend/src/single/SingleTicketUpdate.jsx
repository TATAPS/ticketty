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
    updateTicketMutation.mutate({
      ...ticket,
    });
    setTicket({
      newNote: "",
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
    <div className="ticket-summary">
      <div className="ticket-info" style={{ backgroundColor: "white" }}>
        <div>
          {
            <RenderDropDownUpdate
              label={"Company:"}
              onChangeHandler={handleCompanyChange}
              selectName={"contact"}
              dataToMap={companies}
              mapKey={"ein_tin"}
              value={"name"}
              defaultValue={ticket.company}
            />
          }
        </div>
        <div>
          {
            <RenderDropDownUpdate
              label={"Company Contact:"}
              onChangeHandler={handleContactChange}
              selectName={"contact"}
              dataToMap={contacts}
              mapKey={"person_uuid"}
              value={"contact"}
              defaultValue={ticket.contact}
            />
          }
          {
            <RenderDropDownUpdate
              label={"Priority:"}
              onChangeHandler={handleInputChange}
              selectName={"priority"}
              dataToMap={priorities}
              mapKey={"id"}
              value={"priority"}
              defaultValue={ticket.priority}
            />
          }
          {
            <RenderDropDownUpdate
              label={"Status:"}
              onChangeHandler={handleInputChange}
              selectName={"status"}
              dataToMap={statuses}
              mapKey={"id"}
              value={"status"}
              defaultValue={ticket.status}
            />
          }
          {
            <RenderDropDownUpdate
              label={"Phone:"}
              onChangeHandler={handleInputChange}
              selectName={"phone"}
              dataToMap={contacts}
              mapKey={"person_uuid"}
              value={"phone"}
              defaultValue={ticket.phone}
            />
          }
          {
            <RenderDropDownUpdate
              label={"Email:"}
              onChangeHandler={handleInputChange}
              selectName={"email"}
              dataToMap={contacts}
              mapKey={"person_uuid"}
              value={"email"}
              defaultValue={ticket.email}
            />
          }
          {
            <RenderDropDownUpdate
              label={"Assigned Engineer:"}
              onChangeHandler={handleEngineerChange}
              selectName={"engineer"}
              dataToMap={engineers}
              mapKey={"id"}
              value={"contact"}
              defaultValue={ticket.engineer}
            />
          }
        </div>
      </div>
      <div className="ticket-notes">
        <h3>Notes</h3>
        {
          <RenderInputTypeText
            label="Title"
            displayName="title"
            onChangeHandler={handleInputChange}
            ticket={ticket}
          />
        }
        {
          // notes[0].note ? (
          notes.map((val) => {
            return (
              <div
                className={notes[0].note ? "ticket-note" : "hidden"}
                key={val.note_id}
                style={{ backgroundColor: "white" }}
              >
                {/* problem with this creating white streak when no notes */}
                <p> {val.note}</p>
              </div>
            );
          })
          // ) : (
          //   <p hidden></p>
          // )
        }
        <input
          onChange={handleInputChange}
          type="text"
          name="newNote"
          placeholder="Add a New Note"
          className="newnote-input"
          value={ticket.newNote}
        />
      </div>
      <button onClick={() => handleAddTicket(ticket)}>Save</button>
    </div>
  );
}

export default SingleTicketUpdate;
