import "./Tickets.css"
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { Link } from "react-router-dom";
import TicketsTable from "./TicketsTable"
import { fetchTickets } from "../api/tickets";

function Tickets() {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets
  })
  // const [tickets, setTickets] = useState(data);
  if (isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="tickets">
      <div className="ticket-container">
        <Link to={`/addticket`}>
          <h1>Add Ticket</h1>
        </Link>
        <TicketsTable
          tickets={data}
        />
      </div>
    </div>
  )
}

export default Tickets
