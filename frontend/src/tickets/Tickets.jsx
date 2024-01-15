import "./Tickets.css"
import { useState } from "react";
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
  const [tickets, setTickets] = useState(initialTickets);


  return (
    <div className="tickets">
      <div className="ticketContainer">
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
