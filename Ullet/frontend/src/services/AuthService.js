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
