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

function SingleTicketNotes({ ticket, notes, handleInputChange }) {
  return (
    <div className="ticket-notes">
      <h3>Notes</h3>

      <RenderInputTypeText
        label="Title"
        displayName="title"
        onChangeHandler={handleInputChange}
        ticket={ticket}
      />

      {notes.map((val) => {
        return (
          <div
            className={notes[0].note ? "ticket-note" : "hidden"}
            key={val.note_id}
            style={{ backgroundColor: "white" }}
          >
            <p> {val.note}</p>
          </div>
        );
      })}
      <input
        onChange={handleInputChange}
        type="text"
        name="newNote"
        placeholder="Add a New Note"
        className="newnote-input"
        value={ticket.newNote}
      />
    </div>
  );
}

export default SingleTicketNotes;
