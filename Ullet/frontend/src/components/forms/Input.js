import React from 'react';

function Input(props) {

    const { children, type, placeholder } = props
    return (
        <label className='input'>
            <b>{children}</b>
            <input type={type} placeholder={placeholder}></input>
        </label>
    );
}

export default Input;