import { useState, useEffect } from "react";
import { login } from "../../services/authService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["token"]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) navigate("/");
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    console.log(userName);
    console.log(password);
    login(userName, password).then((token) => {
      //Implementacion
      if (!token) return;
      //Guardamos la cookie del token
      setCookies("token", token, { maxAge: 7 * 24 * 60 * 60 });

      //Navegamos a el dashboard
      navigate("/");
    });
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
