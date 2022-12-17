import React from "react";

import "./forms.css";

function Button(props) {
  const { children, type, onClick, style } = props;

  return (
    <button className={style + "-button"} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
