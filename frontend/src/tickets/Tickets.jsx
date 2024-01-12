import "./Ticket.css"
import TicketsTable from "./TicketsTable"

function Tickets() {
  return (
    <div className="tickets">
      <div className="ticketContainer">
        <TicketsTable />
      </div>
    </div>
  )
}

export default Tickets
