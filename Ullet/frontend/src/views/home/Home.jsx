import React from 'react';
import Button from '../../components/forms/Button';

import "./Home.css"

// @ts-ignore
import illustration from "../../assets/home_illustration.png"

import GridColumn from '../../components/GridColumn';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className='header'>
            <div className='grid container'>

                <GridColumn className="headline" column="1 / span 2">
                    <div className='main-headline'>
                        <p className='title'>Tus Pagos</p>
                        <p className='content'>RÁPIDOS Y EFECTIVOS</p>
                    </div>
                    <p className='supp-headline'>
                        Manejar tu plata nunca había sido tan fácil como en <b>Ullet</b>.
                    </p>
                    <Link to="/register"><Button style="fill">Quero Mi Cuenta</Button></Link>
                </GridColumn>

                <GridColumn className="illustration" column="span 3">
                    <img src={illustration}></img>
                </GridColumn>
            </div>
        </section>
    );
}

export default Home;