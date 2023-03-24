const API_URL = process.env.REACT_APP_API_URL;

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  return data;
}
