import React from 'react';
import "./forms.css"

function Boton(props) {

    const { children, onClick, type, style } = props

    return (
        <button className={style + "-button"} onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default Boton;