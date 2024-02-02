import "./TicketForm.css";
import React, { useState, useEffect, useRef } from "react";

import { useQueryClient, useQuery } from "@tanstack/react-query";

import { fetchCompanies, fetchCompanyContacts } from "../api/companies.jsx";

export const TicketForm2 = ({ onSubmit, initalValues1, initialValues2 }) => {
  const queryClient = useQueryClient();
  const { companies } = initalValues1;
  //   const { contacts } = initialValues2;
  console.log("companies", companies);
  //   console.log("contacts", contacts);

  const [ticket, setTicket] = useState({
    company_id: companies[0]["ein_tin"],
    owner_id: "",
    title: "",
    company: companies[0]["name"],
    owner: "",
    status: "Open",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDropDownInput = (e) => {
    e.preventDefault();
    const filteredData = companies.filter((company) => company.name === e.target.value);
    console.log("filtered", filteredData[0]);
    setTicket({
      ...ticket,
      company_id: filteredData[0].ein_tin,
      company: filteredData[0].name,
    });
  };

  const fetchCompanyContactsQuery = useQuery({
    queryKey: ["companies", ticket.company_id],
    queryFn: () => fetchCompanyContacts(ticket.company_id),
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="company">
        Company:
        <div className="dropdown-box">
          <select onChange={handleDropDownInput} name="company" id="company">
            {companies.map((val) => (
              <option key={val.ein_tin} value={val.name}>
                {val.name}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label htmlFor="contact">
        Company Contact:
        <div className="dropdown-box">
          <select onChange={handleDropDownInput} name="contact" id="contact">
            {/* {data.map((val) => ( */}
            <option
              key={fetchCompanyContactsQuery?.data?.id}
              value={fetchCompanyContactsQuery?.data?.contact}
            >
              {/* {ticket["owner"]} */}
              {fetchCompanyContactsQuery?.data?.contact}
            </option>
            {/* ))} */}
          </select>
        </div>
      </label>
    </form>
  );
};
