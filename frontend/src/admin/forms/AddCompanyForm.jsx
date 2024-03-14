import React from "react";

const AddCompanyForm = () => {
  return (
    <div>
      <h1>Add Company</h1>
      <form>
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Company Address" />
        <input type="text" placeholder="Company Phone" />
        <button>Add Company</button>
      </form>
    </div>
  );
};

export default AddCompanyForm;
