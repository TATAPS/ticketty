import "./SingleTicket.css";
import { useState } from "react";

import { useParams, Link } from "react-router-dom";
import { fetchTicket } from "../api/tickets.jsx";
import TicketSummary from "./TicketSummary.jsx";
import useTicket from "../../hooks/useTicket.jsx";
import SingleTicketUpdate from "./singleTicketUpdate.jsx";

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
    ticketData.map((val, index) =>
      notesData.push({
        note_id: val.note_id,
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
        {ticketData ? <TicketSummary ticketData={ticketData} /> : <p>No Ticket Found</p>}
        {ticketData ? (
          <SingleTicketUpdate
            ticketData={ticketData}
            notesData={notesData}
            // setTicket={setTicket}
            // ticket={ticket}
          />
        ) : (
          <p>No Ticket Found</p>
        )}
        {/* <Tickets /> */}
        <div className="edit-section">
          <Link to={`/tickets/${ticketId}/edit`}>
            <button>Update</button>
          </Link>
          <button
          // onClick={() => handleDelete(/*ticketId*/)}
          >
            Archives
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleTicket;
