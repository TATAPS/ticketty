import "./TicketForm.css";
import React, { useState, useEffect, useRef } from "react";
import RenderDropDown from "../../reusable-components/RenderDropDown";
import RenderInputTypeText from "../../reusable-components/RenderInputTypeText";

function TicketForm({
  initValuesPriorities,
  initValuesCompanies,
  initValuesContacts,
  initValuesStatuses,
  initValuesEngineers,
  ticket,
  setTicket,
  onSubmit,
  handleCompanyChange,
  handleContactChange,
  handleStatusChange,
  handleEngineerChange,
  handleInputChange,
}) {
  const { priorities } = initValuesPriorities;
  const { companies } = initValuesCompanies;
  const { contacts } = initValuesContacts;
  const { statuses } = initValuesStatuses;
  const { engineers } = initValuesEngineers;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ticket);
    setTicket({
      title: "",
      company_id: "",
      engineer_id: "",
      status: "",
      owner_id: "",
      priority: "",
    });
    // navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <RenderDropDown
        label={"Company:"}
        displayName={"Company"}
        onChangeHandler={handleCompanyChange}
        selectName={"company"}
        dataToMap={companies}
        mapKey={"ein_tin"}
        value={"name"}
      />
      <RenderDropDown
        label={"Priority:"}
        displayName={"Priority"}
        onChangeHandler={handleInputChange}
        selectName={"priority"}
        dataToMap={priorities}
        mapKey={"id"}
        value="priority"
      />
      <RenderDropDown
        label="Company Contact:"
        displayName="Contact"
        onChangeHandler={handleContactChange}
        selectName="contact"
        dataToMap={contacts}
        mapKey="person_uuid"
        value="contact"
      />
      <RenderDropDown
        label={"Status:"}
        displayName={"Status"}
        onChangeHandler={handleStatusChange}
        selectName={"status"}
        dataToMap={statuses}
        mapKey={"id"}
        value={"status"}
      />
      <RenderInputTypeText
        label="Title"
        displayName="title"
        onChangeHandler={handleInputChange}
        ticket={ticket}
      />
      <RenderDropDown
        label="Engineer:"
        displayName="Resource"
        onChangeHandler={handleEngineerChange}
        selectName="engineer"
        dataToMap={engineers}
        mapKey="id"
        value="contact"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TicketForm;
