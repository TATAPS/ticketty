import "./SingleTicket.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useTicket from "../../hooks/useTicket.jsx";
import SingleTicketUpdate from "./SingleTicketUpdate.jsx";

function SingleTicket() {
  const [isEditing, setIsEditing] = useState(false);
  const notesData = [];
  // const [error, setError] = useState(false)
  //////////////// TODO: EXTRACT PARAMS ID: default type: string //////////////////////
  let { ticketId } = useParams();
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
        note_creator_id: val.note_creator_id,
      })
    );
    console.log("notes", notesData);
  }
  return (
    <div className="single-ticket-list-container">
      {/* <div className="list-title"> */}
      <h1 className="single-ticket-list-title"> Ticket Summary</h1>
      <h2 className="bold">Ticket #{ticketId}</h2>
      {ticketData ? (
        <SingleTicketUpdate ticketData={ticketData} notesData={notesData} />
      ) : (
        <p>No Ticket Found</p>
      )}
    </div>
    // </div>
  );
}

export default SingleTicket;
