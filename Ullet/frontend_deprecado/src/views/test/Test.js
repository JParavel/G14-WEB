import React from "react";

function Test() {
  function onButtonClick(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <button onClick={onButtonClick}>Boton</button>
    </div>
  );
}

export default Test;
