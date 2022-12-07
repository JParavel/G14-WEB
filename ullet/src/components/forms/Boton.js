import React from 'react';
import "./forms.css"

function Boton(props) {

    const { children, onClick } = props

    return (
        <button className='boton' onClick={onClick}>{children}</button>
    );
}

export default Boton;