import "./TicketForm.css";
import React, { useState, useEffect, useRef } from "react";

import { useQueryClient, useQuery } from "@tanstack/react-query";

import { fetchCompanies, fetchCompanyContacts } from "../api/companies.jsx";

export const TicketForm2 = ({
  onSubmit,
  onHandleChange,
  onHandleChangeContact,
  onHandleInputChange,
  initalValues1,
  initialValues2,
  ticket,
  setTicket,
}) => {
  const queryClient = useQueryClient();
  const { companies } = initalValues1;
  const { contacts } = initialValues2;
  console.log("companies", companies);
  console.log("contacts", contacts);

  // const [ticket, setTicket] = useState({
  //   company_id: companies[0]["ein_tin"],
  //   owner_id: "",
  //   title: "",
  //   company: companies[0]["name"],
  //   owner: "",
  //   status: "Open",
  //   phone: "",
  //   email: "",
  // });

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
        onChange={onHandleInputChange}
        type="text"
        name={label.toLowerCase()}
        value={ticket[label.toLowerCase()]}
      />
    </div>
  );

  // const handleDropDownInput = (e) => {
  //   if (e.target.name === "company") {
  //     const filteredData = companies.filter((company) => company.name === e.target.value);
  //     setTicket({
  //       ...ticket,
  //       company_id: filteredData[0].ein_tin,
  //       company: filteredData[0].name,
  //     });
  //   }
  // };

  // const fetchCompanyContactsQuery = useQuery({
  //   queryKey: ["companies", ticket.company_id],
  //   queryFn: () => fetchCompanyContacts(ticket.company_id),
  // });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company:
        <div className="dropdown-box">
          <select
            onChange={onHandleChange}
            name="company"
            id="company"
            defaultValue="default"
          >
            <option value="default">Choose a Company</option>
            {companies.map((company) => {
              return (
                <option key={company.ein_tin} value={company.name}>
                  {company.name}
                </option>
              );
            })}
          </select>
        </div>
      </label>
      {renderInputTypeText("title")}
      <label htmlFor="contact">
        Company Contact:
        <div className="dropdown-box">
          <select
            onChange={onHandleChangeContact}
            name="contact"
            id="contact"
            defaultValue="default"
          >
            <option value="default">Choose a Contact</option>
            {contacts?.map((contact) => {
              return (
                <option key={contact.person_uuid} value={contact.contact}>
                  {contact.contact}
                </option>
              );
            })}
          </select>
          {/* <select onChange={onHandleChange} name="contact" id="contact">
            <option value="none">Choose a Contact</option>
            {contacts.map((val) => (
              <option key={val.person_uuid}>{val.contact}</option>
            ))}
          </select> */}
        </div>
      </label>
      <button onClick={() => console.log(ticket)} type="submit">
        Submit
      </button>
    </form>
  );
};
