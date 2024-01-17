import "./Tickets.css"
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { Link } from "react-router-dom";
import TicketsTable from "./TicketsTable"
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

// DUMMY_DATA
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')
const time = timeAgo.format(Date.now() - 60 * 1000)
const initialTickets = [
  { id: 1, companyName: 'Snow', mainContact: 'Jon', age: time },
  { id: 2, companyName: 'Lannister', mainContact: 'Cersei', age: time },
  { id: 3, companyName: 'Lannister', mainContact: 'Jaime', age: time },
  { id: 4, companyName: 'Stark', mainContact: 'Arya', age: time },
  { id: 5, companyName: 'Targaryen', mainContact: 'Daenerys', age: time },
  { id: 6, companyName: 'Melisandre', firstName: null, age: time },
  { id: 7, companyName: 'Clifford', mainContact: 'Ferrara', age: time },
  { id: 8, companyName: 'Frances', mainContact: 'Rossini', age: time },
  { id: 9, companyName: 'Roxie', mainContact: 'Harvey', age: time },
];

// MAIN_FUNCTION
function Tickets() {
  const [tickets, setTickets] = useState(
    //REPLACE WITH THE RESULT FROM fetchTickets FUNCTION//
    initialTickets
  );

  ////////////TODO: IMPLEMENT useQuery TO FETCH DATA ///////////////
  // const fetchTickets = async () => {
  //   const response = await fetch('/tickets/')
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   return response.json()
  // }

  //  const { isPending, isError, data, error } = useQuery({
  //  queryKey: ['tickets'],
  //    queryFn: fetchTickets,
  //  })

  //  if (isPending) {
  //    return <span>Loading...</span>
  //  }

  //  if (isError) {
  //    return <span>Error: {error.message}</span>
  //  }



  return (
    <div className="tickets">
      <div className="ticket-container">
        <Link to={`/addticket`}>
          <h1>Add Ticket</h1>
        </Link>
        <TicketsTable
          tickets={tickets}
        />
      </div>
    </div>
  )
}

export default Tickets
