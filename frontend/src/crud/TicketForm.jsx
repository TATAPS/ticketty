import "./TicketForm.css";
import React, { useState, useEffect, useRef } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCompanies, fetchCompanyContacts } from "../api/companies.jsx";

// import { useNavigate } from 'react-router-dom';

function TicketForm({ onSubmit, initialValue }) {
  const queryClient = useQueryClient();
  const { data } = initialValue;
  console.log(data);
  const [ticket, setTicket] = useState({
    company_id: data[0]["ein_tin"] || "40-2522401",
    owner_id: "", //"11eeb505-16a3-6017-8584-001fbc130d5b",
    title: "",
    company: data[0]["name"],
    owner: "",
    status: "Open",
  });

  const fetchCompanyContactsQuery = useQuery({
    queryKey: ["companies", ticket.company_id],
    queryFn: () => fetchCompanyContacts(ticket.company_id),
  });

  const handleChangeInput = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropDownInput = (e) => {
    e.preventDefault();
    const filteredData = data.filter((company) => company.name === e.target.value);
    console.log("filtered", filteredData[0]);
    setTicket({
      ...ticket,
      company_id: filteredData[0].ein_tin,
      company: filteredData[0].name,
      owner_id: fetchCompanyContactsQuery?.data || "",
    });
    console.log(ticket, "ticket");

    queryClient.invalidateQueries({
      queryKey: ["companies", ticket.company_id],
      exact: true,
    });

    // setTicket({
    //   owner_id: fetchCompanyContactsQuery?.data || "",
    //   ...ticket,
    // });
    // const newData = fetchCompanyContactsQuery;
    // console.log("new data here", newData);
    // setTicket({
    //   ...ticket,
    //   owner: newData.contact,
    // });
    // console.log("new data", newData, "ticket", ticket);
  };
  console.log("handleDropDownInput", ticket);

  const renderInputTypeText = (label) => (
    <div>
      <label>{label}</label>
      <input
        onChange={handleChangeInput}
        type="text"
        name={label.toLowerCase()}
        value={ticket[label.toLowerCase()]}
      />
    </div>
  );

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

  if (fetchCompanyContactsQuery.data) {
    //   //   console.log("fetch was successful");
    console.log("company contacts", fetchCompanyContactsQuery.data);
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">
          Company:
          <div className="dropdown-box">
            <select onChange={handleDropDownInput} name="company" id="company">
              {data.map((val) => (
                <option key={val.ein_tin} value={val.name}>
                  {val.name}
                </option>
              ))}
              <option value={data[0].name}>{data[0].name}</option>
            </select>
          </div>
        </label>
        {renderInputTypeText("Title")}
        <label htmlFor="contact">
          Company Contact:
          <div className="dropdown-box">
            <select onChange={handleChangeInput} name="contact" id="contact">
              {/* {data.map((val) => ( */}
              <option
                key={fetchCompanyContactsQuery.data.id}
                value={fetchCompanyContactsQuery.data.contact}
              >
                {/* {ticket["owner"]} */}
                {fetchCompanyContactsQuery.data.contact}
              </option>
              {/* ))} */}
              <option value={data[0].name}>{data[0].name}</option>
            </select>
          </div>
        </label>

        {/* {renderInputDropDown("Company")} */}
        {/* {renderInputDropDown("Status")}
      {renderInputDropDown("Owner_id")} */}
        <button type="submit">Submit</button>

        {/* {data[0]["name"]} */}
      </form>
    );
  }
}
// const renderInputDropDown = (label) => {
//   const { data } = initialValue;
//   console.log("data here", data);
//   <div>
//     <label htmlFor={label}>{label}</label>
//     <select name={label} id={label}>
//       {data.map((val) => {
//         <option value={val.name}>{val.name}</option>;
//       })}
//     </select>
//   </div>;
// };

export default TicketForm;
