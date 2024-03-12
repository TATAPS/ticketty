import "./SingleTicketDetails.css";
import { useNavigate } from "react-router-dom";
import RenderDropDownUpdate from "../../reusable-components/RenderDropDownUpdate.jsx";

function SingleTicketDetails({
  ticket,
  companies,
  priorities,
  statuses,
  engineers,
  contacts,
  handleCompanyChange,
  handleContactChange,
  handleEngineerChange,
  handleInputChange,
  handleAddTicket,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="single-ticket-ticket-info"
      // style={{ backgroundColor: "white" }}
    >
      <div>
        <RenderDropDownUpdate
          label={"Company:"}
          onChangeHandler={handleCompanyChange}
          selectName={"contact"}
          dataToMap={companies}
          mapKey={"ein_tin"}
          value={"name"}
          defaultValue={ticket.company}
        />
      </div>
      <div>
        <RenderDropDownUpdate
          label={"Company Contact:"}
          onChangeHandler={handleContactChange}
          selectName={"contact"}
          dataToMap={contacts}
          mapKey={"person_uuid"}
          value={"contact"}
          defaultValue={ticket.contact}
        />

        <RenderDropDownUpdate
          label={"Priority:"}
          onChangeHandler={handleInputChange}
          selectName={"priority"}
          dataToMap={priorities}
          mapKey={"id"}
          value={"priority"}
          defaultValue={ticket.priority}
        />

        <RenderDropDownUpdate
          label={"Status:"}
          onChangeHandler={handleInputChange}
          selectName={"status"}
          dataToMap={statuses}
          mapKey={"id"}
          value={"status"}
          defaultValue={ticket.status}
        />

        <RenderDropDownUpdate
          label={"Phone:"}
          onChangeHandler={handleInputChange}
          selectName={"phone"}
          dataToMap={contacts}
          mapKey={"person_uuid"}
          value={"phone"}
          defaultValue={ticket.phone}
        />

        <RenderDropDownUpdate
          label={"Email:"}
          onChangeHandler={handleInputChange}
          selectName={"email"}
          dataToMap={contacts}
          mapKey={"person_uuid"}
          value={"email"}
          defaultValue={ticket.email}
        />

        <RenderDropDownUpdate
          label={"Assigned Engineer:"}
          onChangeHandler={handleEngineerChange}
          selectName={"engineer"}
          dataToMap={engineers}
          mapKey={"id"}
          value={"contact"}
          defaultValue={ticket.engineer}
        />
        <div className="single-list-button-container">
          <button
            className="single-list-save-button bold"
            onClick={() => handleAddTicket(ticket)}
          >
            Save
          </button>
          <button className="single-list-cancel-button " onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleTicketDetails;
