import "./Tickets.css"
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { Link } from "react-router-dom";
import TicketsTable from "./TicketsTable"
import { fetchTickets } from "../api/tickets";

// MAIN_FUNCTION
function Tickets() {
  ////////////TODO: IMPLEMENT useQuery TO FETCH DATA ///////////////
  const { isFetching, isError, data, error } = useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets,
  })
  console.log(isFetching, isError, data, error)
  const [tickets, setTickets] = useState(
    //REPLACE WITH THE RESULT FROM fetchTickets FUNCTION//
    data
  );


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
