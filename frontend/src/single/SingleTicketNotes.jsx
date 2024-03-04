import "./SingleTicket.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useTicket from "../../hooks/useTicket.jsx";
import { useNavigate } from "react-router-dom";
import useUpdateTicket from "../../hooks/useUpdateTicket.jsx";
import RenderInputTypeText from "../../reusable-components/RenderInputTypeText.jsx";

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
            className={
              notes[0].note
                ? val.note_creator_id === ticket.engineer_uuid
                  ? "ticket-note ticket-note-engineer"
                  : "ticket-note ticket-note-alt"
                : "hidden"
            }
            key={val.note_id}
            // style={{ backgroundColor: "white" }}
          >
            {val.note_creator_id === ticket.engineer_uuid ? (
              <>
                <p className="name-contact-engineer">{ticket.engineer}</p>
                <p className="ticket-note-text">{val.note}</p>
              </>
            ) : (
              <>
                <p className="name-contact-alt">{ticket.contact}</p>
                <p className="ticket-note-text"> {val.note}</p>
              </>
            )}
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
