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
    const response = await fetch(
      `https://localhost:8080/api/tickets/${updateTicket.id}/edit`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTicket),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
