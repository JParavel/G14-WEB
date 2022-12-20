import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import { register } from "../../services/AuthService";

import "./Register.css";

function Login() {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  async function onButtonClick(event) {
    event.preventDefault();

    if (passwordInput != confirmPasswordInput) {
      return alert("las contraseñas no coinciden");
    }

    const res = await register(userInput, passwordInput);
    console.log(res);
  }

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} />
        </Link>
        <h1 className="title">
          Registrarse en <b>Ullet</b>
        </h1>
        <form className="flex card form">
          {/* <Input>Telefono</Input> */}
          <Input onChange={(e) => setUserInput(e.target.value)}>
            Nombre De Usuario
          </Input>
          <Input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
          >
            Contraseña
          </Input>
          <Input
            type="password"
            onChange={(e) => setConfirmPasswordInput(e.target.value)}
          >
            Confirmar Contraseña
          </Input>
          <Button onClick={onButtonClick} style="fill">
            Registrarme
          </Button>
        </form>
        <div className="register card">
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
