import "./SingleTicket.css"
import { useState, useReducer } from "react";
import { useParams } from "react-router-dom"
import ticketsReducer from "./ticketsReducer";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Sidebar from '../sidebar/Sidebar';
import Navbar from "../navbar/Navbar";

function SingleTicket() {
  const [isEditing, setIsEditing] = useState(false);
  const [tickets, dispatch] = useReducer(ticketsReducer, initialTickets);
  let { ticketId } = useParams();

  let ticket = initialTickets.filter(t => t.id === parseInt(ticketId))[0]

  function handleChangeTicket(ticket) {
    dispatch({
      type: 'changed',
      ticket: ticket,
    });
  }

  function handleDeleteTicket(ticketId) {
    dispatch({
      type: 'deleted',
      id: ticketId,
    });
  }

  return (
    < div className='single' >
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singlelistContainer">
          {/* <div className="listTitle"></div> */}
          {/* <Tickets /> */}
          <div className="ticketSummary">
            <p>TicketId: {ticket.id}</p>
            <p>TicketCompany: {ticket.companyName}</p>
            <label>
              {ticket.mainContact}
              <button onClick={() => handleDeleteTicket(ticket.id)}>Delete</button>
            </label>
          </div>
        </div>
      </div>
    </div >

  )
}

export default SingleTicket

