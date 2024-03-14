// import "./SingleTicket.css";
import "./SingleTicketNotes.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useTicket from "../../hooks/useTicket.jsx";
import { useNavigate } from "react-router-dom";
import useUpdateTicket from "../../hooks/useUpdateTicket.jsx";
import ContactNote from "./ContactNote.jsx";
import EngineerNote from "./EngineerNote.jsx";
import RenderInputTypeText from "../../reusable-components/RenderInputTypeText.jsx";

function SingleTicketNotes({ ticket, notes, handleInputChange }) {
  console.log("ticket_engineer", ticket.engineer);
  return (
    <div>
      <RenderInputTypeText
        label="Initial Description:"
        value="title"
        onChangeHandler={handleInputChange}
        ticket={ticket}
        class_name="ticket-note-background-shape-contact"
      />
      {notes.map((val) => {
        return (
          <div
            className={notes[0].note === null && "hidden"}
            //   notes[0].note !== null
            //     ? val.note_creator_id === ticket.engineer_uuid
            //       ? "ticket-note-background-shape-engineer ticket-note-engineer-background-color"
            //       : "ticket-note-background-shape-contact ticket-note-contact-background-color"
            //     : "hidden"
            // }
            key={val.note_id}
            // style={{ backgroundColor: "white" }}
          >
            {notes[0].note !== null ? (
              val.note_creator_id === ticket.engineer_uuid ? (
                <>
                  <p className="engineer-name">{ticket.engineer}:</p>
                  <div className="ticket-note-background-shape-engineer ticket-note-engineer-background-color">
                    <EngineerNote ticket={ticket} val={val} />
                    {/* <p className="name-contact-engineer">{ticket.engineer}</p>
                <p className="ticket-note-text">{val.note}</p> */}
                  </div>
                </>
              ) : (
                <>
                  <p className="engineer-name">{ticket.contact}:</p>
                  <div className="ticket-note-background-shape-contact ticket-note-contact-background-color">
                    <ContactNote ticket={ticket} val={val} />
                    {/* <p className="name-contact-alt">{ticket.contact}</p>
                <p className="ticket-note-text"> {val.note}</p> */}
                  </div>
                </>
              )
            ) : null}
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
      {/* <ContactNote ticket={ticket} val={notes[0]} /> */}
    </div>
  );
}

export default SingleTicketNotes;
