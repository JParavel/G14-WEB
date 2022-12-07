import React from 'react';

import "./utils.css"

function Flex(props) {

    const { children, padding, borderRadius } = props

    return (
        <div style={{ padding, borderRadius }} className='flex'>
            {children}
        </div>
    );
}

export default Flex;