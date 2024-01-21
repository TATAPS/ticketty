
export async function fetchTickets() {
  try {
    const response = await fetch('http://localhost:8080/api/tickets')
    return response.json()
  } catch (error) {
    throw error
  }
}
