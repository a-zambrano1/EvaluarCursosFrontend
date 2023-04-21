import { BadRequestError, HTTPError, UnauthorizedError } from "./http-errors";

const API_URL = process.env.REACT_APP_API_URL;

function throwError(response, message) {
  if (response.status === 400) {
    throw new BadRequestError(message);
  } else if (response.status === 401) {
    throw new UnauthorizedError(message);
  } else {
    throw new HTTPError(message);
  }
}

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (res.ok) {
    return await res.json();
  } else {
    throwError(res);
  }
}

export async function sendForm({ formData, id }) {
  const res = await fetch(`${API_URL}/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData, id }),
    credentials: "include",
  });

  if (!res.ok) {
    throwError(res);
  }
}
