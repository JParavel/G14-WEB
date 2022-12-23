import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <Link to="/home">Home</Link>
      <h1>Inicia sesión en ToDo</h1>
      <LoginForm />
      <p>
        ¿No tienes cuenta? <Link to="/register">Registrate Aqui</Link>
      </p>
    </section>
  );
}

export default Login;
