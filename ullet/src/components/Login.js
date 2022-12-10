import React, { useState } from 'react';
import Boton from './forms/Boton';
import Input from './forms/Input';
import Flex from './utils/Flex';
import Gap from './utils/Gap';

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
            <Flex padding="2rem" borderRadius="1rem">
                <h1>Mi App</h1>
                <Gap direction="vertical">1rem</Gap>
                <Input onChange={(e) => onUserChange(e)}>User Name</Input>
                <Gap direction="vertical">0.5rem</Gap>
                <Input type="password" onChange={(e) => onPasswordChange(e)}>Password</Input>
                <Gap direction="vertical">3rem</Gap>
                <Boton type="submit">Login</Boton>
            </Flex>
        </form>
    );
}

export default Login;