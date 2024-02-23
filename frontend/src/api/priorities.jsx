export async function fetchPriorities() {
  try {
    const response = await fetch("https://localhost:8080/api/priorities", {
      credentials: "include",
      mode: "cors",
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
