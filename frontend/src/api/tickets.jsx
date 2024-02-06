export async function fetchTickets() {
  try {
    const response = await fetch("https://localhost:8080/api/tickets");
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchTicket(id) {
  try {
    const response = await fetch(`https://localhost:8080/api/tickets/${id}`);
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function addTicket(newTicket) {
  try {
    console.log("newTicket", newTicket);
    const response = await fetch("https://localhost:8080/api/tickets", {
      method: "POST",
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

export async function updateTicket(id) {
  try {
    const response = await fetch(`https://localhost:8080/api/tickets/${id}`, {
      method: "put",
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
