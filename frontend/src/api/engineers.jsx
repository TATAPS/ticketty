export async function fetchEngineers() {
  try {
    const response = await fetch("https://localhost:8080/api/engineers");
    return response.json();
  } catch (error) {
    throw error;
  }
}
