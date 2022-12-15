import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../forms/Button';


import "./Navbar.css"

function Navbar() {

    return (
        <>
            <nav className='navbar'>
                <ul className='menu flex container'>
                    <li><Link to="/"><Logo size="34px" showText={true} /></Link> </li>
                    {/* <li><Link to="/">Inicio</Link></li> */}
                    {/* <li><Link to="/about">Nosotros</Link></li> */}
                    <li><Link to="/login"><Button style="wire">Ingresar</Button></Link></li>
                </ul>
            </nav >

            <Outlet></Outlet>
        </>
    );
}

export default Navbar;