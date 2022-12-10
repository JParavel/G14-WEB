import React from 'react';
import "./forms.css"

function Boton(props) {

    const { children, onClick, type } = props

    return (
        <button className='boton' onClick={onClick} type={type}>{children}</button>
    );
}

export default Boton;