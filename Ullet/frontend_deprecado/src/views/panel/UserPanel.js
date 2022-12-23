import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { getTransactions } from "../../services/TransactionService";
import Transaction from "./Transaction";

import "./UserPanel.css";

function UserPanel() {
  const { token } = useContext(TokenContext);
  const [cookies, setCookie] = useCookies(["token"]);

  let currentToken;

  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    console.log(token);
    console.log(cookies.token);
    if (!token && !cookies.token) {
      return navigate("/login");
    } else {
      if (token) {
        currentToken = token;
      } else {
        currentToken = cookies.token;
      }
    }

    async function fetchData() {
      const documents = await getTransactions(currentToken);
      setDocuments(documents);
    }

    // getTransactions(user.name).then((documents) => setDocuments(documents));

    fetchData();
  }, []);

  return (
    <section className="user-panel">
      <div className="container">
        <div className="balance card flex">
          <h1>Mi Saldo:</h1>
          <p>$ 7,051,913</p>
        </div>

        <h1>Movimientos</h1>

        <div className="transactions card">
          {documents.map((document) => (
            <Transaction data={document} key={document._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserPanel;
