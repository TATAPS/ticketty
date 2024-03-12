function EngineerNote({ ticket, val }) {
  return (
    <div>
      {val.note !== null ? (
        <div>
          <p className="engineer-name">{ticket.engineer}</p>
          <p className="ticket-note-text-engineer"> {val.note}</p>
        </div>
      ) : null}
    </div>
  );
}

export default EngineerNote;
