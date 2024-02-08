const renderTicketNote = ({ ticketData }) => {
  const reversedTicketData = ticketData?.slice().reverse();
  return reversedTicketData?.map(ticket => (
    ticket.note ? (
      <div className="ticket-note" key={ticket.id} style={{ backgroundColor: 'white' }}>
        <p>{ticket.note}</p>
      </div>
    ) : (
      <p>No notes available</p>
    )
  ));
}

export default renderTicketNote;
