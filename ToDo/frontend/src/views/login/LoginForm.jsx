import { useState } from "react";
import { login } from "../../services/authService";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    console.log(userName);
    console.log(password);
    login(userName, password);
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <label>
        <span>User Name</span>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        <span>Password</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;
