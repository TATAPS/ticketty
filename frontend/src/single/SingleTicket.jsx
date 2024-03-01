import "./SingleTicket.css";
import { useState } from "react";

import { useParams, Link } from "react-router-dom";
import { fetchTicket } from "../api/tickets.jsx";
import TicketSummary from "./TicketSummary.jsx";
import useTicket from "../../hooks/useTicket.jsx";
import SingleTicketUpdate from "./SingleTicketUpdate.jsx";
import SingleTicketDetails from "./SingleTicketDetails.jsx";
import SingleTicketNotes from "./SingleTicketNotes.jsx";

function SingleTicket() {
  // const [ticket, setTicket] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const notesData = [];
  // const [error, setError] = useState(false)
  //////////////// TODO: EXTRACT PARAMS ID: default type: string //////////////////////
  let { ticketId } = useParams();
  // console.log("ticketId", ticketId);
  const { isFetching, isError, data: ticketData, error } = useTicket(ticketId);

  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (ticketData) {
    console.log("ticket data here", ticketData);
    ticketData.map((val, index) =>
      notesData.push({
        note_id: val.ticket_notes_id,
        note: val.note,
        ticket_total_time: val.ticket_total_time,
        ticket_id: val.ticket_id,
      })
    );
    console.log("notes", notesData);
  }
  return (
    <div className="list-container">
      <h1>#{ticketId}</h1>
      <div className="list-title">
        {/* {ticketData ? <TicketSummary ticketData={ticketData} /> : <p>No Ticket Found</p>} */}
        {ticketData ? (
          <>
            {/* <div className="ticket-summary"> */}
            <SingleTicketUpdate ticketData={ticketData} notesData={notesData} />
            {/* <SingleTicketDetails ticketData={ticketData} notesData={notesData} />
              <SingleTicketNotes ticketData={ticketData} notesData={notesData} /> */}
            {/* </div> */}
          </>
        ) : (
          <p>No Ticket Found</p>
        )}
      </div>
      {/* <div className="edit-section">
        <button onClick={() => handleAddTicket(ticket)}>Save</button>
      </div> */}
    </div>
  );
}

export default SingleTicket;
