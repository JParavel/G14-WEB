import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo';
import Boton from './forms/Boton';

import "./Nav.css"

function Nav() {

    return (
        <nav className='nav'>
            <ul className='container flex'>
                <li><Link to="/"><Logo></Logo></Link></li>
                <li><Link to="/"><b>Inicio</b></Link></li>
                <li><Link to="/about"><b>Sobre Nosotros</b></Link></li>
                <li><Link to="/login"><Boton style="wire">INGRESAR</Boton></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;