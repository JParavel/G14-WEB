export async function register(userName, password) {
  const data = {
    user: {
      userName: userName,
      password: password,
    },
  };

  const res = await fetch("http://localhost:8080/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Registro exitoso");
  } else {
    alert("Hubo un fallo en el registro");
  }
}
export async function login(userName, password) {
  const res = await fetch("http://localhost:8080/api/login", {
    mode: "cors",
    headers: {
      username: userName,
      password: password,
    },
  });

  if (res.ok) {
    const document = await res.json();
    alert(document.token);
  } else {
    alert("No autorizado");
  }
}
