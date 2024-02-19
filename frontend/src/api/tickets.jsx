export async function fetchTickets() {
  try {
    const response = await fetch("https://localhost:8080/api/tickets", {
      method: "GET",
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchTicket(id) {
  try {
    const response = await fetch(`https://localhost:8080/api/tickets/${id}`, {
      method: "GET",
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function addTicket(newTicket) {
  try {
    const response = await fetch("https://localhost:8080/api/tickets", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateTicket(updateTicket) {
  try {
    console.log(updateTicket);
    const response = await fetch(`https://localhost:8080/api/tickets/update`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTicket),
    });

    console.log("inside response", response.body);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
