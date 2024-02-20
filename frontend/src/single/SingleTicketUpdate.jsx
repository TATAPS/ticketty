import "./SingleTicket.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useTicket from "../../hooks/useTicket.jsx";
import { useNavigate } from "react-router-dom";
// import useAddTicket from "../../hooks/useAddTicket.jsx";
import useUpdateTicket from "../../hooks/useUpdateTicket.jsx";
import RenderDropDown from "../../reusable-components/RenderDropDown.jsx";
import RenderInputTypeText from "../../reusable-components/RenderInputTypeText.jsx";
import { updateTicket } from "../api/tickets.jsx";

function SingleTicketUpdate({ ticketData, notesData }) {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(ticketData[0]);
  const [notes, setNotes] = useState(notesData);
  let { ticketId } = useParams();
  console.log("ticketid", ticketId);

  const updateTicketMutation = useUpdateTicket();

  const handleInputChange = (e) => {
    e.preventDefault();
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTicket = (ticket) => {
    updateTicketMutation.mutate({
      ...ticket,
    });
    navigate("/");
  };

  console.log(ticket);
  return (
    <div className="ticket-summary">
      <div className="ticket-info" style={{ backgroundColor: "white" }}>
        {
          <RenderInputTypeText
            label="Title"
            displayName="title"
            onChangeHandler={handleInputChange}
            ticket={ticket}
          />
        }
      </div>
      <div className="ticket-notes">
        <h3>Notes</h3>
        {notes.map((val) => {
          return (
            <div
              className="ticket-note"
              key={val.note_id}
              style={{ backgroundColor: "white" }}
            >
              <p> {val.note}</p>
            </div>
          );
        })}
        <input type="text" placeholder="New Notes" className="newnote-input" />
      </div>
      <button onClick={() => handleAddTicket(ticket)}>Save</button>
    </div>
  );
}

export default SingleTicketUpdate;
