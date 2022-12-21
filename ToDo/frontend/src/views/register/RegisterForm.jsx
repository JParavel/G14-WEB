import { useState } from "react";
import { register } from "../../services/authService";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    register(userName, password);
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
      <label>
        <span>Confirm Password</span>
        <input type="password" />
      </label>
      <button type="submit">Registrarme</button>
    </form>
  );
}

export default RegisterForm;
