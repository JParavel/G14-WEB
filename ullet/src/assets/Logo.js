import React from 'react';

// @ts-ignore
import logo from "./logo.png"

function Logo() {

    const imgStyle = {
        width: "34px",
        height: "34px"
    }

    const style = {
        alignItems: "center",
        gap: "0.5rem"
    }

    return (
        <div className='logo flex' style={style}>
            <img src={logo} style={imgStyle}></img>
            <h1>Ullet</h1>
        </div>
    );
}

export default Logo;