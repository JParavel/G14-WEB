import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import "./UserPanel.css";

function Transaction(props) {
  const { user } = useContext(UserContext);

  const { data } = props;
  const { from, to, value, createdAt } = data;

  if (from == user.name) {
    //Salientes
    return (
      <div style={{ marginLeft: "auto" }} className="transaction grid">
        <p className="from">{to}</p>
        <p className="negative-value">$ {value}</p>
        <p className="date">{createdAt.substr(0, 10)}</p>
      </div>
    );
  }

  return (
    //Entrantes
    <div className="transaction grid">
      <p className="from">{from}</p>
      <p className="positive-value">$ {value}</p>
      <p className="date">{createdAt.substr(0, 10)}</p>
    </div>
  );
}

export default Transaction;
