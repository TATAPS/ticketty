import { useParams, Link } from "react-router-dom";
function TicketSummary({ ticketData, ticketId }) {
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
      ticket.note ? (
        <div className="ticket-note" key={ticket.id} style={{ backgroundColor: 'white' }}>
          <p>{ticket.note}</p>
        </div>
      ) : (
        <p>No notes available</p>
      )
    ));
  }
  return (
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
        <div className="edit-section">
          <Link to={`/tickets/${ticketId}/edit`}>
            <button>Update</button>
          </Link>
          <button
          // onClick={() => handleDelete(/*ticketId*/)}
          >Archives</button>
        </div>
      </div>
      <div className="ticket-notes">
        <h3>Notes</h3>
        {renderTicketNote()}
        {/* <input type="file" placeholder="Upload File" aria-label="Upload File" /> */}
        <input type="text" placeholder="New Notes" className="newnote-input" />
      </div>
    </div>
  );
}

export default TicketSummary;
