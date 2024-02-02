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

  const { data: fetchCompanyContactsQuery, status } = useQuery({
    queryKey: ["companies2", ticket.company_id],
    queryFn: () => fetchCompanyContacts(ticket.company_id),
    enabled: !!ticket.company_id,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "success") {
    console.log(ticket.company_id);

    const handleDropDownInput = (e) => {
      console.log(e.target);
      console.log(e.target.value);
      const filtered = companies.filter((company) => company.name === e.target.value);
      console.log("filtered", filtered);

      setTicket({
        ...ticket,
        company_id: filtered[0].ein_tin,
        company: filtered[0].name,
        owner_id: fetchCompanyContactsQuery?.data?.person_uuid,
      });
    };
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

    //   if (fetchCompanyContactsQuery.data) {
    console.log("fetch context", fetchCompanyContactsQuery?.data?.person_uuid);
    return (
      <div>
        <h1>{ticket.company_id}</h1>
        <h1>{companies[0].created_at}</h1>
        {/* <h1>{contacts.person_uuid}</h1> */}
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
                {/* <option value={companies[0].name}>{companies[0].name}</option> */}
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
                {/* <option value={data[0].name}>{data[0].name}</option> */}
              </select>
            </div>
          </label>
        </form>
      </div>
    );
    //   }
    //   const fetchedContacts = useQuery({
    //     queryKey: ["companyContacts", ticket],
    //     // queryKey: ["companyContacts", companies[0]["ein_tin"]],
    //     queryFn: async () => await fetchCompanyContacts(ticket.company_id),
    //     enable: ticket.company_id !== null,
    //   });
    //   //   queryClient.invalidateQueries({
    //   //     queryKey: ["companies", ticket.company_id],
    //   //     exact: true,
    //   //   });

    //   console.log("fetched", fetchedContacts);

    //   if (fetchedContacts.data) {
    //     const handleDropDownInput = (e) => {
    //       e.preventDefault();
    //       const filteredCompanyData = companies.filter(
    //         (company) => company.name === e.target.value
    //       );
    //       setTicket({
    //         ...ticket,
    //         company_id: filteredCompanyData[0].ein_tin,
    //         company: filteredCompanyData[0].name,
    //       });

    //       setTicket({
    //         owner_id: fetchedContacts.data.person_uuid,
    //         owner: fetchedContacts?.data?.contact,
    //         phone: fetchedContacts?.data?.phone,
    //       });
    //       // queryClient.invalidateQueries({
    //       //   queryKey: ["companies", ticket.company_id],
    //       //   exact: true,
    //       // });

    //       // const filteredContacts = contacts.filter(
    //       //     (contact) =>
    //       // )
    //     };

    //     const renderInputDropDown = (label, fetchedData, category, index) => (
    //       <div key={label}>
    //         <label htmlFor={label}>
    //           {label}:
    //           <div className="dropdown-box">
    //             <select
    //               // defaultValue="none"
    //               key={fetchedData[index]}
    //               onChange={handleDropDownInput}
    //               name={category}
    //               id={label}
    //             >
    //               {/* <option defaultValue="none" selected disabled hidden> */}
    //               Select an Option
    //               {/* </option> */}
    //               {console.log("hello", label, fetchedData)}
    //               {Array.isArray(fetchedData) ? (
    //                 fetchedData.map((val) => (
    //                   <option key={val[index]} value={val[category]}>
    //                     {val[category]}
    //                   </option>
    //                 ))
    //               ) : (
    //                 <option value={fetchedData[category]}>{fetchedData[category]}</option>
    //               )}
    //             </select>
    //           </div>
    //         </label>
    //       </div>
    //     );

    //     const handleSubmit = (e) => {
    //       e.preventDefault();
    //       onSubmit(ticket);
    //       setTicket({
    //         title: "",
    //         company_id: "",
    //         status: "",
    //         owner_id: "",
    //       });
    //       // navigate("/");
    //     };

    //     //   if (fetchedContacts.data) {
    //     const { data } = fetchedContacts;
    //     return (
    //       <form onSubmit={handleSubmit}>
    //         {renderInputDropDown("Company", companies, "name", ["ein_tin"])}
    //         {renderInputDropDown("Contact", data, "contact", ["person_uuid"])}
    //         <div>{ticket.company_id}</div>
    //         <div>{ticket.owner_id}</div>
    //         <div>{ticket.company}</div>
    //       </form>
    //     );
    //   }
    // };
    //   const fetchCompanyContactsQuery = useQuery({
    //     queryKey: ["companies", ticket.company_id],
    //     queryFn: () => fetchCompanyContacts(ticket.company_id),
    //     enabled: ticket.company_id !== null,
    //   });

    //   if(fetchCompanyContactsQuery.data){

    //   }

    //   return (
    //     <div>
    //       TicketForm2
    //       <div>
    //         {companies.map((val) => {
    //           return (
    //             <div key={val.ein_tin}>
    //               {val.ein_tin}
    //               {val.name}
    //               {val.active}
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   );
  }
};
