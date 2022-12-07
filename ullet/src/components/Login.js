import React from 'react';
import Boton from './forms/Boton';
import Input from './forms/Input';
import Flex from './utils/Flex';
import Gap from './utils/Gap';

function Login() {
    return (
        <Flex padding="2rem" borderRadius="1rem">
            <h1>Lo que quiera</h1>
            <Gap direction="vertical">1rem</Gap>
            <Input>User Name</Input>
            <Gap direction="vertical">0.5rem</Gap>
            <Input type="password">Password</Input>
            <Gap direction="vertical">3rem</Gap>
            <Boton>Login</Boton>
        </Flex>
    );
}

export default Login;