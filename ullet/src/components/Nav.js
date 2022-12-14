import React from 'react';
import Container from './utils/Container';

function Nav(props) {

    const { children } = props

    return (
        <nav className='nav'>
            <Container>{children}</Container>
        </nav>
    );
}

export default Nav;