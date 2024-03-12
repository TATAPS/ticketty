function ContactNote({ ticket, val }) {
  console.log("val", val.note);
  return (
    <div>
      {val.note !== null ? (
        <div>
          <p className="contact-name">{ticket.contact}</p>
          <p className="ticket-note-text-contact"> {val.note}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ContactNote;
