import "./SingleTicket.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useTicket from "../../hooks/useTicket.jsx";
import { useNavigate } from "react-router-dom";
// import useAddTicket from "../../hooks/useAddTicket.jsx";
import useUpdateTicket from "../../hooks/useUpdateTicket.jsx";
import RenderDropDown from "../../reusable-components/RenderDropDown.jsx";
import RenderInputTypeText from "../../reusable-components/RenderInputTypeText.jsx";
import { updateTicket } from "../api/tickets.jsx";

function SingleTicketUpdate({ ticketData }) {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(ticketData[0]);
  let { ticketId } = useParams();
  console.log("ticketid", ticketId);

  const updateTicketMutation = useUpdateTicket();

  const handleInputChange = (e) => {
    e.preventDefault();
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTicket = (ticket) => {
    updateTicketMutation.mutate({
      ...ticket,
    });
    navigate("/");
  };

  console.log(ticket);
  return (
    <div className="list-container">
      <h1>#{ticketId}</h1>
      <div className="list-title">
        {
          <RenderInputTypeText
            label="Title"
            displayName="title"
            onChangeHandler={handleInputChange}
            ticket={ticket}
          />
        }
        <h1>Hello from SingleTicketUpdate</h1>
      </div>
      <button onClick={() => handleAddTicket(ticket)}>Save</button>
    </div>
  );
}

export default SingleTicketUpdate;
