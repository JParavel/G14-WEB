import React from 'react';
import { useParams } from 'react-router-dom';

function User(props) {

    const { name } = useParams()

    return (
        <h1> Esta es la página del usuario: {name} 😏</h1>
    );
}

export default User;