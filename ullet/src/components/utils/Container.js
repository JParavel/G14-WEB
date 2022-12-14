import React from 'react';

function Container(props) {

    const { children, padding = "2rem", maxWidth = "60rem" } = props

    return (
        <div className='container' style={{ paddingLeft: padding, paddingRight: padding, maxWidth }}>
            {children}
        </div>
    );
}

export default Container;