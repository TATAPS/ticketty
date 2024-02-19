export async function fetchEngineers() {
  try {
    const response = await fetch("https://localhost:8080/api/engineers", {
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function loginUser(user) {
  try {
    const response = await fetch("https://localhost:8080/auth/login", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      window.location.href = "https://localhost:3000/";
    } else {
      return "Login Failed";
    }
  } catch (error) {
    console.error(error);
  }
}

export async function logoutUser() {
  try {
    const response = await fetch("https://localhost:8080/auth/logout", {
      method: "GET",
      credentials: "include",
      mode: "cors",
    });

    if (response.ok) {
      console.log("inside logoutUser route on frontend", response.json());
      // window.location.href = "https://localhost:3000/auth/login";
      return response.json();
    } else {
      return "Logout Failed";
    }
  } catch (error) {
    console.error(error);
  }
}
