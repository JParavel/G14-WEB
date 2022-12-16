import React from 'react';

import "./UserPanel.css"

function Transaction(props) {

    const { data } = props
    const { from, value, createdAt } = data

    return (
        <div className='transaction grid'>
            <p className='from'>{from}</p>
            <p className='value'>$ {value}</p>
            <p className='date'>{createdAt}</p>
        </div>
    );
}

export default Transaction;