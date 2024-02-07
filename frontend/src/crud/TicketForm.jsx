import "./TicketForm.css";
import React, { useState, useEffect, useRef } from "react";

function TicketForm({
  initValuesCompanies,
  initValuesContacts,
  initValuesStatuses,
  ticket,
  setTicket,
  onSubmit,
  handleCompanyChange,
  handleContactChange,
  handleInputChange,
}) {
  const { companies } = initValuesCompanies;
  const { contacts } = initValuesContacts;
  const { statuses } = initValuesStatuses;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ticket);
    setTicket({
      title: "",
      company_id: "",
      status: "",
      owner_id: "",
    });
    // navigate("/");
  };

  const renderInputTypeText = (label) => (
    <div>
      <label>{label}</label>
      <input
        onChange={handleInputChange}
        type="text"
        name={label.toLowerCase()}
        value={ticket[label.toLowerCase()]}
      />
    </div>
  );

  const renderDropDown = (
    label,
    displayName,
    onChangeHandler,
    selectName,
    dataToMap,
    key,
    value
  ) => (
    <div>
      <label>
        {label}
        <div className="dropdown-box">
          <select
            onChange={onChangeHandler}
            name={selectName}
            id={selectName}
            defaultValue="default"
          >
            <option value="default">Choose a {displayName}</option>
            {dataToMap?.map((data) => {
              return (
                <option key={data?.[key]} value={data?.[value]}>
                  {data?.[value]}
                </option>
              );
            })}
          </select>
        </div>
      </label>
    </div>
  );

  // console.log(contacts);
  return (
    <form onSubmit={handleSubmit}>
      {renderDropDown(
        "Company:",
        "Company",
        handleCompanyChange,
        "company",
        companies,
        "ein_tin",
        "name"
      )}
      {renderDropDown(
        "Status:",
        "Status",
        handleInputChange,
        "status",
        statuses,
        "id",
        "status"
      )}
      {renderDropDown(
        "Company Contact:",
        "Contact",
        handleContactChange,
        "contact",
        contacts,
        "person_uuid",
        "contact"
      )}
      {renderInputTypeText("title")}
      {/* {renderDropDown(
        "Phone:",
        "Phone",
        handleInputChange,
        "phone",
        contacts,
        "person_uuid",
        "phone"
      )} */}
      <button onClick={() => console.log(ticket)} type="submit">
        Submit
      </button>
    </form>
  );
}

export default TicketForm;
