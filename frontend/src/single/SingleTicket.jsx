import "./SingleTicket.css";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { fetchTicket } from "../api/tickets.jsx";

function SingleTicket() {
  const [ticket, setTicket] = useState({});
  const [isEditing, setIsEditing] = useState(false);


  const handleMouseUp = () => {
    setResizing(false);
  };
  // const [error, setError] = useState(false)
  //////////////// TODO: EXTRACT PARAMS ID: default type: string //////////////////////
  let { ticketId } = useParams();

  const { isFetching, isError, data: ticketData, error } = useQuery({
    queryKey: ["tickets", ticketId],
    queryFn: () => fetchTicket(ticketId),
  })
  // console.log(isFetching, isError, data, error)
  ////////////TODO: IMPLEMENT useQuery TO FETCH DATA ///////////////
  // const queryClient = useQueryClient();
  // const fetchSingleTicket = async () => {
  //   const response = await fetch('/tickets/' + ticketId)
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   return response.json()
  // }

  ///////////// ERROR HANDLER ///////////////
  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (ticketData) {
    console.log(ticketData);
  }
  const formatText = (text) => {
    // Remove underscores and capitalize the first letter of each word
    return text.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const renderInfo = (propertyName) => (
    <p>{`${formatText(propertyName)}: ${ticketData[0][propertyName.toLowerCase()]}`}</p>
  );
  const renderTicketNote = () => {
    const reversedTicketData = ticketData?.slice().reverse();
    return reversedTicketData?.map(ticket => (
      <div className="ticket-note" key={ticket.id} style={{ backgroundColor: 'white' }}>
        <p>{ticket.note}</p>
      </div>
    ));
  }

  return (
    <div className="list-container">
      <div className="list-title">
        <h1>#{ticketId}</h1>
        {/* <Tickets /> */}
        {ticketData ? (
          <div className="ticket-summary">
            <div className="ticket-info" style={{ backgroundColor: 'white' }}>
              <h2>{ticketData[0].title}</h2>
              {renderInfo("company_Id")}
              {renderInfo("created_at")}
              {renderInfo("engineer_id")}
              {renderInfo("owner_id")}
              {renderInfo("status")}
              {renderInfo("ticket_id")}
              {renderInfo("ticket_total_time")}
            </div>
            <div className="ticket-notes">
              <h3>Notes</h3>
              {renderTicketNote()}
              {/* <input type="file" placeholder="Upload File" aria-label="Upload File" /> */}
              <input type="text" placeholder="New Notes" />
            </div>
          </div>
        ) : (
          <p>No Ticket Found</p>
        )}
        <label>
          <Link to={`/tickets/${ticketId}/edit`}>
            <button>Update</button>
          </Link>
          <button
          // onClick={() => handleDelete(/*ticketId*/)}
          >Archive</button>
        </label>
      </div>
    </div>
  );
}

export default SingleTicket;
