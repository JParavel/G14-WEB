import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';

import "./Login.css"

function Login() {
    return (
        <section className='login'>
            <div className="container">
                <Link to="/"><Logo /></Link>
                <h1 className='title'>Iniciar Sesión en <b>Ullet</b></h1>
                <p>¡Que gusto verte nuevamente!</p>
                <form className='flex card form'>
                    <Input>Usuario</Input>
                    <Input type="password">Contraseña</Input>
                    <Button style="fill">Iniciar Sesión</Button>
                </form>
                <div className='register card'>
                    <p>
                        ¿Nuevo en Ullet? <Link to="/register">Crear una cuenta</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;