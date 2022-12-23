import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <Link to="/home">Home</Link>
      <h1>Registrate en ToDo</h1>
      <RegisterForm />
      <p>
        ¿Tienes una cuenta? <Link to="/login">Ingresa Aqui</Link>
      </p>
    </section>
  );
}

export default Register;
