import React, { useState } from 'react';
import Boton from '../components/forms/Boton';
import Input from '../components/forms/Input';

function Login() {

    async function onSubmit(evento) {
        evento.preventDefault()

        const res = await fetch("http://localhost:8080/login", {
            method: "GET",
            mode: "cors",
            headers: {
                user: user,
                password: password
            }
        })

        if (res.ok) {
            const data = await res.json()
            alert("Tu token es: " + data.token)
        } else {
            alert(res.status)
        }
    }

    const [user, setUser] = useState("");

    function onUserChange(e) {
        setUser(e.target.value)
        // console.log(user);
        //Implementacion,
        //Validacion
    }

    function onPasswordChange(e) {
        setPassword(e.target.value)
    }

    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(evento) => onSubmit(evento)}>
            <h1>Mi App</h1>
            <Input onChange={(e) => onUserChange(e)}>User Name</Input>
            <Input type="password" onChange={(e) => onPasswordChange(e)}>Password</Input>
            <Boton type="submit">Login</Boton>

        </form>
    );
}

export default Login;