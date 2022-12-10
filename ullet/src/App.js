import React, { useState } from 'react';
import "./assets/global.css"
import Boton from './components/forms/Boton';
import Login from './components/Login';

function App() {

    const [contador, setContador] = useState(0);

    function IncrementarContador() {
        const nuevoValor = contador + 1
        setContador(nuevoValor)
        console.log("El valor del contador es: " + contador);
    }


    return (
        <div>
            <Login></Login>
            <p>Contador: {contador}</p>
            <Boton onClick={IncrementarContador}>Incrementar Contador</Boton>
        </div>
    );
}

export default App;