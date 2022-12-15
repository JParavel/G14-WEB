import React from 'react';
import Boton from '../../components/forms/Boton';
import GridColum from '../../components/utils/GridColumn';

// @ts-ignore
import heroImage from "./hero_image.png"
import "./Home.css"

function Home() {
    return (
        <section className='home'>
            <div className='grid container'>
                <GridColum className='headline'>
                    <h2 className='title'>Tus Pagos ...</h2>
                    <h1 className='content'>RÁPIDOS Y EFECTIVOS</h1>
                    <p className='supporting'>Manejar tu plata nunca había sido tan fácil como en <b>Ullet</b>.</p>
                    <Boton style="fill">QUIERO MI CUENTA</Boton>
                </GridColum>
                <GridColum className='hero-image'>
                    <img src={heroImage}></img>
                </GridColum>
            </div>
        </section>
    );
}

export default Home;