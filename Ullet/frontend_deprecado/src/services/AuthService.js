export async function login(user, password) {
  const res = await fetch("http://localhost:8080/api/login/", {
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
  const res = await fetch("http://localhost:8080/api/user/", {
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
