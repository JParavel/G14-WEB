import { API_URL } from "./api";

export async function login(user, password) {
  const res = await fetch(API_URL + "/api/login/", {
    headers: {
      name: user,
      password: password,
    },
  });

  if (res.ok) {
    const document = await res.json();
    return document.token;
  } else {
    console.log("no autorizado");
    return null;
  }
}

export async function register(user, password) {
  const data = {
    user: {
      name: user,
      password: password,
    },
  };
  const res = await fetch(API_URL + "/api/user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const document = await res.json();
    return document;
  } else {
    return null;
  }
}
