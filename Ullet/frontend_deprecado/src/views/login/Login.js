import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { login } from "../../services/AuthService";

import "./Login.css";

function Login() {
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token", "userName"]);

  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();
    const token = await login(userName, password);

    if (token) {
      setToken(token);
      setCookie("token", token, { maxAge: 7 * 24 * 60 * 60 });
      setUser({ name: userName });
      setCookie("userName", userName, { maxAge: 7 * 24 * 60 * 60 }); //Expiración en 7 días
      navigate("/panel");
    } else {
      alert("Credenciales Incorrectas");
    }
  }

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} />
        </Link>
        <h1 className="title">
          Iniciar Sesión en <b>Ullet</b>
        </h1>
        <p>¡Que gusto verte nuevamente!</p>
        <form className="flex card form">
          <Input onChange={(event) => setUserName(event.target.value)}>
            Usuario
          </Input>
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          >
            Contraseña
          </Input>

          <Button onClick={onButtonClick} style={"fill"}>
            Iniciar Sesión
          </Button>
        </form>
        <div className="register card">
          <p>
            ¿Nuevo en Ullet? <Link to="/register">Crear una cuenta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
