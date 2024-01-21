export async function fetchTickets() {
  const response = await fetch('http://localhost:8080/api/tickets')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
