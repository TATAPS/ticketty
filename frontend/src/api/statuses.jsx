export async function fetchStatuses() {
  try {
    const response = await fetch("https://localhost:8080/api/statuses", {
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}
