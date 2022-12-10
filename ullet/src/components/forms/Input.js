import React from 'react';
import "./forms.css"

function Input(props) {

    const { children, type, onChange } = props

    return (
        <input className='input' type={type} onChange={onChange} placeholder={children}></input>
    );
}

export default Input;