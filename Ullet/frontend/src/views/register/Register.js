import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';

import "./Register.css"

function Login() {
    return (
        <section className='login'>
            <div className="container">
                <Link to="/"><Logo /></Link>
                <h1 className='title'>Registrarse en <b>Ullet</b></h1>
                <form className='flex card form'>
                    <Input>Telefono</Input>
                    <Input>Nombre De Usuario</Input>
                    <Input type="password">Contraseña</Input>
                    <Input type="password">Confirmar Contraseña</Input>
                    <Button style="fill">Registrarme</Button>
                </form>
                <div className='register card'>
                    <p>
                        ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;