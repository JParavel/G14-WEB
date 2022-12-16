import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';

import "./UserPanel.css"

function UserPanel() {

    async function fetchData() {
        const res = await fetch("http://localhost:8080/api/transaction/Juan")
        const documents = await res.json()
        setDocuments(documents)
        console.log(documents);
    }

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <section className='user-panel'>
            <div className='container'>
                <div className='balance card flex'>
                    <h1>Mi Saldo:</h1>
                    <p>$ 7,051,913</p>
                </div>

                <h1>Movimientos</h1>

                <div className='transactions card'>
                    {documents.map((document) => <Transaction data={document} />)}
                </div>
            </div>
        </section>
    );
}

export default UserPanel;