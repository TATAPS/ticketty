export async function fetchCompanies() {
  try {
    const response = await fetch("https://localhost:8080/api/companies", {
      credentials: "include",
      mode: "cors",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchCompany(id) {
  try {
    const response = await fetch(`https://localhost:8080/api/companies/${id}`, {
      credentials: "include",
      mode: "cors",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchCompanyContacts(ein_tin) {
  try {
    const response = await fetch(
      `https://localhost:8080/api/contacts/company/${ein_tin}`,
      {
        credentials: "include",
        mode: "cors",
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
}
